import { useEffect, useRef } from "react";
import { css } from "@emotion/react";
import { Col, Row } from "@components/flex/Flex";
import SubHeader from "@components/header/SubHeader";
import Footer from "@components/footer/Footer";
import styled from "@emotion/styled";
import Txt from "@components/text/Txt";
import useCaculateInnerSize from "src/hook/useCaculateInnerSize";
import { Building, Bus, Car, Phone, Train } from "@images/index";

declare global {
  interface Window {
    kakao: any;
  }
}

const Contact = () => {
  const mapContainer = useRef<HTMLDivElement | null>(null);

  const { isMobile, isTablet } = useCaculateInnerSize();

  const infowindowContent = `
  <div style="
    padding: 8px 10px;
    background-color: white;
    border: 1.5px solid #ddd;
    border-radius: 10px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
    font-size: 12px;
    font-weight: bold;
    color: #333;
    text-align: center;
    white-space: nowrap;
  ">
    영주현대장례식장
  </div>
`;

  const InfoComponent = () => {
    return (
      <>
        <Col gap={20}>
          <Txt
            fontFamily="JejuGothic"
            fontSize="2.8rem"
            mobileFontSize="1.6rem"
            color="#1F2236"
            lineHeight="160%"
          >
            정보
          </Txt>
          <Devider />
          <Row gap={15} alignItems="center">
            <Building
              css={css`
                flex-shrink: 0;
              `}
            />
            <Txt
              fontFamily="JejuGothic"
              fontSize="1.8rem"
              mobileFontSize="1.4rem"
              color="#000"
              lineHeight="160%"
            >
              경북 영주시 가흥공단로 11 영주현대장례식장
            </Txt>
          </Row>
          <Row gap={15} alignItems="center">
            <Phone
              css={css`
                flex-shrink: 0;
              `}
            />
            <Txt
              fontFamily="JejuGothic"
              fontSize="1.8rem"
              mobileFontSize="1.4rem"
              color="#000"
              lineHeight="160%"
            >
              054-634-4400
            </Txt>
          </Row>
        </Col>

        <Col gap={20}>
          <Txt
            fontFamily="JejuGothic"
            fontSize="2.8rem"
            mobileFontSize="1.6rem"
            color="#1F2236"
            lineHeight="160%"
          >
            교통안내
          </Txt>
          <Devider />
          <Row gap={15} alignItems="flex-start">
            <Car
              css={css`
                flex-shrink: 0;
                padding-top: 3px;
              `}
            />
            <Txt
              fontFamily="JejuGothic"
              fontSize="1.8rem"
              mobileFontSize="1.4rem"
              color="#000"
              lineHeight="160%"
              css={css`
                width: 90%;
                white-space: pre-wrap;
              `}
            >
              자가용 이용 시
              <br />
              네비게이션에서 "영주현대장례식장" 또는 "가흥공단로 11" 입력
            </Txt>
          </Row>
          <Row gap={15} alignItems="flex-start">
            <Bus
              css={css`
                flex-shrink: 0;
                padding-top: 3px;
              `}
            />
            <Txt
              fontFamily="JejuGothic"
              fontSize="1.8rem"
              mobileFontSize="1.4rem"
              color="#000"
              lineHeight="160%"
              css={css`
                width: 90%;
                white-space: pre-wrap;
              `}
            >
              시외버스 이용 시
              <br />
              영주시외버스정류장 하차 → 택시 이용 (약 3분 소요)
            </Txt>
          </Row>
          <Row gap={15} alignItems="flex-start">
            <Train
              css={css`
                flex-shrink: 0;
                padding-top: 3px;
              `}
            />
            <Txt
              fontFamily="JejuGothic"
              fontSize="1.8rem"
              mobileFontSize="1.4rem"
              color="#000"
              lineHeight="160%"
              css={css`
                width: 90%;
                white-space: pre-wrap;
              `}
            >
              기차 이용 시
              <br />
              영주역 하차 → 택시 이용 (약 10분 소요)
            </Txt>
          </Row>
        </Col>
      </>
    );
  };

  useEffect(() => {
    const kakaoMapKey = import.meta.env.VITE_KAKAO_MAP_KEY; // ✅ 환경 변수 불러오기
    console.log(kakaoMapKey);
    if (!kakaoMapKey) {
      console.error("🚨 카카오 맵 API 키가 설정되지 않았습니다!");
      return;
    }

    const script = document.createElement("script");
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${kakaoMapKey}&libraries=services&autoload=false`;
    script.async = true;
    script.onload = () => {
      if (!window.kakao || !window.kakao.maps) {
        console.log("🚨 카카오 지도 API를 불러오는 데 실패했습니다.");
        return;
      }

      window.kakao.maps.load(() => {
        if (!mapContainer.current) return;

        const options = {
          center: new window.kakao.maps.LatLng(36.830906, 128.595358),
          level: 2,
        };

        const map = new window.kakao.maps.Map(mapContainer.current, options);

        // 마커를 생성하고 지도에 추가
        const markerPosition = new window.kakao.maps.LatLng(
          36.830906,
          128.595358
        );
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });

        marker.setMap(map);
        // 인포윈도우를 생성하고 마커에 추가
        const infowindow = new window.kakao.maps.CustomOverlay({
          position: marker.getPosition(), // 마커 위치에 표시
          content: infowindowContent, // 스타일이 적용된 HTML
          xAnchor: 0.5, // 가운데 정렬
          yAnchor: 2.4, // 마커 위쪽에 표시
          zIndex: 3, // 다른 요소보다 위에 표시
        });

        infowindow.setMap(map); // 인포윈도우를 지도와 마커에 연결
        const zoomControl = new window.kakao.maps.ZoomControl();
        map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);

        setTimeout(() => {
          const zoomControlElement = document.querySelector(".map_zoomcontrol");
          if (zoomControlElement) {
            (zoomControlElement as HTMLElement).style.boxShadow = "none"; // ✅ 그림자 제거
            (zoomControlElement as HTMLElement).style.border = "none"; // ✅ 기본 테두리 제거
            (zoomControlElement as HTMLElement).style.background =
              "transparent"; // ✅ 필요하면 배경 제거
          }
        }, 500);
      });
    };

    document.head.appendChild(script);
  }, []);

  return (
    <Col
      justifyContent="center"
      alignItems="center"
      css={css`
        width: 100%;
      `}
    >
      <SubHeader title="오시는 길" />

      <div
        ref={mapContainer}
        css={css`
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          width: ${isMobile || isTablet
            ? `calc(100% - 40px)`
            : `calc(100% - 240px)`};
          height: ${isMobile ? `300px` : `450px`};
          margin: 80px 0 50px;
        `}
      />
      {isTablet || isMobile ? (
        <Col gap={40} padding="0 20px 70px">
          <InfoComponent />
        </Col>
      ) : (
        <Row gap={100} padding="0 120px 70px">
          <InfoComponent />
        </Row>
      )}

      <Footer />
    </Col>
  );
};

export default Contact;

const Devider = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ddd;
`;
