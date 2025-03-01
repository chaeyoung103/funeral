import styled from "@emotion/styled";
import mainImg from "@assets/images/mainImg.png";
import { Col, Row } from "@components/flex/Flex";
import { LogoIcon, MainOneImage, MainTwoImage } from "@assets/images";
import Txt from "@components/text/Txt";
import { useEffect, useRef, useState } from "react";
import { css } from "@emotion/react";

const Home = () => {
  const [isVisible, setIsVisible] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY <= 120);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container ref={scrollRef}>
      <div css={{ position: "relative", width: "100%", height: "100vh" }}>
        <MainHome src={mainImg} alt="main" />
        <div
          css={{
            position: "absolute",
            bottom: "200px",
            left: "100px",
          }}
        >
          <Col>
            <Txt
              fontFamily="JejuMyeongjo"
              fontSize="40px"
              color="white"
              lineHeight="160%"
            >
              고귀한 삶의 마지막 순간
              <br />
              소중한 분의 마지막 여정을 따뜻한 배려로 함께하는
            </Txt>
            <Row gap={10} alignItems="flex-end">
              <Txt
                fontFamily="JejuMyeongjo"
                fontSize="45px"
                color="white"
                lineHeight="160%"
              >
                영주현대장례식장
              </Txt>
              <Txt
                fontFamily="JejuMyeongjo"
                fontSize="40px"
                color="white"
                lineHeight="170%"
              >
                입니다.
              </Txt>
            </Row>
          </Col>
        </div>
      </div>

      {isVisible && (
        <MainHeader>
          <Row justifyContent="flex-start" alignItems="center">
            <LogoIcon />
            <Txt
              fontFamily="JejuGothic"
              fontSize="20px"
              color="white"
              letterSpacing="1px"
            >
              영주현대장례식장
            </Txt>
          </Row>
          <Row gap={30} justifyContent="flex-end" alignItems="center">
            <Txt
              fontFamily="JejuGothic"
              fontSize="20px"
              color="white"
              letterSpacing="1px"
            >
              시설안내
            </Txt>
            <Txt
              fontFamily="JejuGothic"
              fontSize="20px"
              color="white"
              letterSpacing="1px"
            >
              오시는길
            </Txt>
          </Row>
        </MainHeader>
      )}
      <div
        css={css`
          display: flex;
          width: 100%;
          justify-content: center;
          align-items: center;
          padding: 0 70px;
        `}
      >
        <MainOneImage />
        <MainTwoImage
          css={css`
            margin-top: 30%;
            margin-left: -10%;
          `}
        />
      </div>
      <Col
        justifyContent="center"
        alignItems="center"
        gap={60}
        padding="90px 0"
      >
        <Txt
          fontFamily="JejuMyeongjo"
          fontSize="56px"
          color="#1F2236"
          lineHeight="160%"
        >
          "고인과 가족을 위한 따뜻한 공간"
        </Txt>
        <Txt
          fontFamily="JejuGothic"
          fontSize="30px"
          color="#545454"
          lineHeight="160%"
          align="center"
        >
          영주현대장례식장은 소중한 이별의 순간을 정성껏 준비하고,
          <br /> 가족과 친지들에게 편안하고 차분한 환경을 제공하고자 합니다.
          <br /> 전문적인 장례 서비스와 세심한 배려로 고인의 마지막 길을
          <br /> 존경과 사랑으로 함께 합니다.
        </Txt>
      </Col>
      <Col justifyContent="center" alignItems="center" gap={50}>
        <Txt
          fontFamily="JejuGothic"
          fontSize="40px"
          color="#1F2236"
          lineHeight="160%"
        >
          빈소현황
        </Txt>
      </Col>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MainHome = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;

const MainHeader = styled.header`
  position: fixed;
  padding: 44px 70px;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 120px;
`;

export default Home;
