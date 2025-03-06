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

    const rows = document.querySelectorAll("table tbody tr");

    if (rows.length === 0) {
      console.warn("⚠️ [WARN] 테이블 데이터 없음");
      return res.status(500).json({ error: "스크래핑 실패: 데이터 없음" });
    }

    const result = Array.from(rows)
      .map((row) => {
        const cells = row.querySelectorAll("td");
        if (cells.length < 5) return null; // 유효한 데이터만 처리

        return {
          image: "imageurl", // 이미지 URL이 없는 경우 기본값 설정
          nameInfo: cells[1].textContent?.trim() || "", // 고인 이름
          monutaryInfo: cells[2].textContent?.trim() || "", // 상주 정보
          mournerInfo: cells[0].textContent?.trim() || "", // 분향실 정보
          startDateInfo: cells[3].textContent?.trim().split("\n")[0] || "", // 시작 날짜
          endDateInfo: cells[4].textContent?.trim().split("\n")[0] || "", // 종료 날짜
          locationInfo: cells[3].textContent?.trim().split("\n").pop() || "", // 장례식장 위치
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
