import { useEffect, useState } from "react";

interface FuneralData {
  image: string;
  nameInfo: string;
  monutaryInfo: string;
  mournerInfo: string;
  locationInfo: string;
  startDateInfo: string;
  endDateInfo: string;
}

const useFuneralData = (): FuneralData[] => {
  const [funeralData, setFuneralData] = useState<FuneralData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://funeral-home-website.vercel.app/api/scrape"
        );
        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }
        const data: FuneralData[] = await response.json();
        setFuneralData(data);
      } catch (err) {
        console.error("🔴 [ERROR] 데이터 로드 실패:", err);
      } finally {
        console.log("✅ [INFO] 데이터 로드 완료");
      }
    };

    fetchData();
  }, []);

  return funeralData;
};

export default useFuneralData;
