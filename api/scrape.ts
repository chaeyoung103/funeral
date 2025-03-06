import { NowRequest, NowResponse } from "@vercel/node";
import fetch from "node-fetch";
import { JSDOM } from "jsdom";

export default async (req: NowRequest, res: NowResponse) => {
  try {
    const response = await fetch("https://funein.com/hdfh/manage/viewer/");
    const html = await response.text();
    const dom = new JSDOM(html);
    const document = dom.window.document;

    const rows = document.querySelectorAll("table tbody tr");
    const result: string[][] = [];

    rows.forEach((row) => {
      const cells = row.querySelectorAll("td");
      const rowData = Array.from(cells).map(
        (td) => td.textContent?.trim() || ""
      );
      result.push(rowData);
    });

    return res.status(200).json(result);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "스크래핑 실패" });
  }
};
