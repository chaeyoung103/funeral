import styled from "@emotion/styled";
import mainImg from "@assets/images/mainImg.png";
import { Col, Row } from "@components/flex/Flex";
import {
  ContactNext,
  LogoIcon,
  MainOneImage,
  MainTwoImage,
  Room1_1,
  Room2_1,
} from "@assets/images";
import Txt from "@components/text/Txt";
import { useEffect, useRef, useState } from "react";
import { css } from "@emotion/react";
import MonutarySlider from "@components/home/slider/MonutarySlider";
import Footer from "@components/footer/Footer";

const Home = () => {
  const [isVisible, setIsVisible] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  const monutaryInfoList = [
    {
      image: "dd",
      nameInfo: "홍길동",
      monutaryInfo: "홍길동, 홍길동",
      mournerInfo: "dd",
      startDateInfo: "dd",
      endDateInfo: "dd",
      locationInfo: "dd",
    },
    {
      image: "dd",
      nameInfo: "홍길동",
      monutaryInfo: "홍길동, 홍길동",
      mournerInfo: "dd",
      startDateInfo: "dd",
      endDateInfo: "dd",
      locationInfo: "dd",
    },
    {
      image: "dd",
      nameInfo: "홍길동",
      monutaryInfo: "홍길동, 홍길동",
      mournerInfo: "dd",
      startDateInfo: "dd",
      endDateInfo: "dd",
      locationInfo: "dd",
    },
    {
      image: "dd",
      nameInfo: "홍길동",
      monutaryInfo: "홍길동, 홍길동",
      mournerInfo: "dd",
      startDateInfo: "dd",
      endDateInfo: "dd",
      locationInfo: "dd",
    },
    {
      image: "dd",
      nameInfo: "홍길동",
      monutaryInfo: "홍길동, 홍길동",
      mournerInfo: "dd",
      startDateInfo: "dd",
      endDateInfo: "dd",
      locationInfo: "dd",
    },
    {
      image: "dd",
      nameInfo: "홍길동",
      monutaryInfo: "홍길동, 홍길동",
      mournerInfo: "dd",
      startDateInfo: "dd",
      endDateInfo: "dd",
      locationInfo: "dd",
    },
  ];

  const handleContact = () => {
    //scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    const phoneNumber = "0546344400"; // 전화번호를 실제 번호로 변경하세요.
    if (window.innerWidth > 768) {
      // PC 환경
      navigator.clipboard
        .writeText(phoneNumber)
        .then(() => {
          alert("전화번호가 복사되었습니다.");
        })
        .catch((err) => {
          console.error("전화번호 복사 실패:", err);
        });
    } else {
      // 모바일 환경
      window.location.href = `tel:+${phoneNumber}`;
    }
  };

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
        <Contact onClick={handleContact}>
          <Txt
            fontFamily="JejuGohtic"
            fontSize="2.2rem"
            color="white"
            lineHeight="150%"
            letterSpacing="1px"
          >
            상담하러가기
          </Txt>
          <ContactNext
            css={css`
              padding-top: 1px;
            `}
          />
        </Contact>
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
              fontSize="2rem"
              color="white"
              letterSpacing="1px"
            >
              시설안내
            </Txt>
            <Txt
              fontFamily="JejuGothic"
              fontSize="2rem"
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
        gap={40}
        padding="150px 0 100px"
      >
        <Txt
          fontFamily="JejuMyeongjo"
          fontSize="5rem"
          color="#1F2236"
          lineHeight="160%"
        >
          "고인과 가족을 위한 따뜻한 공간"
        </Txt>
        <Txt
          fontFamily="JejuGothic"
          fontSize="2.6rem"
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
      <Col
        justifyContent="center"
        alignItems="center"
        gap={50}
        padding="70px 0 150px"
      >
        <Txt
          fontFamily="JejuGothic"
          fontSize="4rem"
          color="#1F2236"
          lineHeight="160%"
        >
          빈소현황
        </Txt>

        <MonutarySlider infoList={monutaryInfoList} />
      </Col>
      <Col
        justifyContent="center"
        alignItems="center"
        gap={50}
        padding="0 0 150px"
      >
        <Txt
          fontFamily="JejuGothic"
          fontSize="4rem"
          color="#1F2236"
          lineHeight="160%"
        >
          분향실안내
        </Txt>
        <Row gap={50} justifyContent="center" alignItems="flex-start">
          <Col
            gap={10}
            justifyContent="flex-start"
            alignItems="center"
            css={css`
              width: auto;
            `}
          >
            <Room1_1 />
            <Txt
              fontFamily="JejuMyeongjo"
              fontSize="2.4rem"
              color="#000"
              lineHeight="150%"
              css={css`
                width: 100%;
                margin-top: 10px;
              `}
            >
              특실
            </Txt>
            <Txt
              fontFamily="JejuGothic"
              fontSize="1.6rem"
              color="#545454"
              lineHeight="150%"
              css={css`
                width: 100%;
                max-width: 600px;
              `}
            >
              영주현대장례식장의 특실은 고인의 가족과 가까운 분들을 위한 전용
              공간으로, 편안하고 조용한 분위기에서 추모의 시간을 가질 수 있도록
              설계되었습니다. 고급스러운 인테리어와 함께 필요한 모든 편의시설을
              갖추고 있어, 가족과 친지 분들이 보다 안락하게 지낼 수 있습니다.
            </Txt>
          </Col>
          <Col
            gap={10}
            justifyContent="flex-start"
            alignItems="center"
            css={css`
              width: auto;
            `}
          >
            <Room2_1 />
            <Txt
              fontFamily="JejuMyeongjo"
              fontSize="2.4rem"
              color="#000"
              lineHeight="150%"
              css={css`
                width: 100%;
                margin-top: 10px;
              `}
            >
              1분향실
            </Txt>
            <Txt
              fontFamily="JejuGothic"
              fontSize="1.6rem"
              color="#545454"
              lineHeight="150%"
              css={css`
                width: 100%;
                max-width: 600px;
              `}
            >
              고인의 영정 사진과 함께 고인을 모시는 공간으로, 친척 및 가까운
              분들이 추모의 뜻을 표할 수 있는 공간입니다. 아늑한 공간으로
              가족분들이 함께 모여 고인을 기억하고 기릴 수 있는의미 있는 시간이
              될 것입니다.
            </Txt>
          </Col>
        </Row>
      </Col>
      <Footer />
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

const Contact = styled.div`
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 5px;
  cursor: pointer;
`;

export default Home;
