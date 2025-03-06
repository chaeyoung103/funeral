import { VercelRequest, VercelResponse } from "@vercel/node";
import fetch from "node-fetch";
import { JSDOM } from "jsdom";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    console.log("✅ [INFO] /api/scrape 실행됨");

    const response = await fetch("https://funein.com/hdfh/manage/viewer/");
    if (!response.ok) {
      console.error(`🔴 [ERROR] HTTP 요청 실패: ${response.status}`);
      return res
        .status(500)
        .json({ error: `HTTP 요청 실패 (상태코드: ${response.status})` });
    }

    const html = await response.text();
    const dom = new JSDOM(html);
    const document = dom.window.document;

    const rows = document.querySelectorAll("tbody tr");

    if (rows.length === 0) {
      console.warn("⚠️ [WARN] 테이블 데이터 없음");
      return res.status(500).json({ error: "스크래핑 실패: 데이터 없음" });
    }

    const result = Array.from(rows)
      .map((row) => {
        const cells = row.querySelectorAll("td");
        if (cells.length < 5) return null; // 유효한 데이터만 처리

        return {
          image: cells[1].querySelector("img")?.getAttribute("src") || "", // 고인 이미지 URL
          nameInfo: cells[0].textContent?.replace(/\s+/g, " ").trim() || "", // 고인 이름
          monutaryInfo: extractMonutaryInfo(cells[2]), // 상주 정보 (함수로 가공)
          mournerInfo: extractMournerInfo(cells[0]), // 빈소 정보 (함수로 가공)
          locationInfo: cells[3].textContent?.replace(/\s+/g, " ").trim() || "", // 장례식장 정보
          startDateInfo: extractDateInfo(cells[4], 0), // 시작 날짜
          endDateInfo: extractDateInfo(cells[4], 1), // 종료 날짜
        };
      })
      .filter(Boolean); // `null` 값 제거

    console.log("✅ [SUCCESS] 변환된 데이터:", JSON.stringify(result, null, 2));
    return res.status(200).json(result);
  } catch (error) {
    console.error("🔴 [ERROR] 스크래핑 중 오류 발생:", error);
    return res
      .status(500)
      .json({ error: "서버 내부 오류 발생", details: error });
  }
}

/**
 * 🔹 빈소 정보 추출 함수
 */
function extractMournerInfo(cell: Element): string {
  const spanElement = cell.querySelector("span.relation");
  return spanElement ? spanElement.textContent?.trim() || "" : "";
}

/**
 * 🔹 상주 정보 추출 함수
 */
function extractMonutaryInfo(cell: Element): string {
  const spans = cell.querySelectorAll("span.relation");
  const relations: string[] = [];

  spans.forEach((span) => {
    const relationText = span.textContent?.trim() || "";
    const nameText = span.nextSibling?.textContent?.trim() || "";
    if (relationText && nameText) {
      relations.push(`${relationText} ${nameText}`);
    }
  });

  return relations.join(", ");
}

/**
 * 🔹 날짜 정보 추출 함수
 */
function extractDateInfo(cell: Element, index: number): string {
  const dateLines = cell.innerHTML
    .split("<br>")
    .map((line) => line.replace(/\s+/g, " ").trim());
  return dateLines[index] || "";
}
