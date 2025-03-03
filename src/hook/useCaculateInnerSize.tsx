import { useEffect, useState } from "react";

const useCaculateInnerSize = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [innerHeight, setInnerHeight] = useState(window.innerHeight);
  const [isTablet, setIsTablet] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setInnerWidth(window.innerWidth);
      setInnerHeight(window.innerHeight * 0.01);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (innerWidth <= 768) {
      setIsMobile(true);
      setIsTablet(false);
    } else if (innerWidth <= 1024 && innerWidth > 768) {
      setIsTablet(true);
      setIsMobile(false);
    } else {
      setIsMobile(false);
      setIsTablet(false);
    }
  }, [innerWidth]);

  return { innerWidth, innerHeight, isTablet, isMobile };
};

export default useCaculateInnerSize;
