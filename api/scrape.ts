import { VercelRequest, VercelResponse } from "@vercel/node";
import fetch from "node-fetch";
import { JSDOM } from "jsdom";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    console.log("🔵 [INFO] 스크래핑 시작");

    const url = "https://funein.com/hdfh/manage/viewer/";
    const response = await fetch(url);

    if (!response.ok) {
      console.error(`🔴 [ERROR] HTTP 요청 실패: ${response.status}`);
      return res
        .status(500)
        .json({ error: `HTTP 요청 실패 (상태코드: ${response.status})` });
    }

    const html = await response.text();
    console.log("🟢 [INFO] HTML 데이터 가져오기 완료");

    const dom = new JSDOM(html);
    const document = dom.window.document;

    const rows = document.querySelectorAll("table tbody tr");

    if (rows.length === 0) {
      console.warn("⚠️ [WARN] 테이블 데이터가 없음");
      return res
        .status(500)
        .json({ error: "스크래핑 실패: 테이블 데이터 없음" });
    }

    const result: string[][] = [];

    rows.forEach((row) => {
      const cells = row.querySelectorAll("td");
      const rowData = Array.from(cells as NodeListOf<HTMLTableCellElement>).map(
        (td) => td.textContent?.trim() || ""
      );
      result.push(rowData);
    });

    console.log("✅ [SUCCESS] 스크래핑 성공!");
    return res.status(200).json(result);
  } catch (error) {
    console.error("🔴 [ERROR] 스크래핑 중 오류 발생:", error);
    return res
      .status(500)
      .json({ error: "서버 내부 오류 발생", details: error });
  }
}
