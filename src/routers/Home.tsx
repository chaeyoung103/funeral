import styled from "@emotion/styled";
import mainImg from "@assets/images/mainImg.png";
import { Col, Row } from "@components/flex/Flex";
import {
  ContactNext,
  MainOneImage,
  MainTwoImage,
  Room1_1,
  Room2_1,
} from "@assets/images";
import Txt from "@components/text/Txt";
import { css, keyframes } from "@emotion/react";
import MonutarySlider from "@components/home/slider/MonutarySlider";
import Footer from "@components/footer/Footer";
import useCaculateInnerSize from "src/hook/useCaculateInnerSize";
import Header from "@components/header/Header";

const Home = () => {
  const { isMobile, isTablet } = useCaculateInnerSize();

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
  ];

  const handleContact = () => {
    //scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    const phoneNumber = "0546344400";
    if (!isMobile) {
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
      window.location.href = `tel:${phoneNumber}`;
    }
  };

  

  return (
    <Container>
      <div
        css={css`
          position: relative;
          width: 100%;
          height: 100dvh;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          align-items: center;
        `}
      >
        <MainHome src={mainImg} alt="main" />

        <Header />

        <Contact onClick={handleContact}>
          <Txt
            fontFamily="JejuGohtic"
            fontSize="2.2rem"
            mobileFontSize="1.8rem"
            color="white"
            lineHeight="30px"
            mobileLineHeight="30px"
            letterSpacing="1px"
          >
            상담하러가기
          </Txt>
          <ContactNext />
        </Contact>
        <div
          css={{
            position: "absolute",
            bottom: isTablet ? "150px" : isMobile ? "120px" : "200px",
            left: isTablet ? "50px" : isMobile ? "30px" : "70px",
          }}
        >
          <Col>
            <AnimatedTxt
              fontFamily="JejuMyeongjo"
              fontSize="4rem"
              mobileFontSize="2rem"
              color="white"
              lineHeight="160%"
            >
              {isTablet || isMobile ? (
                <>
                  고귀한 삶의 마지막 순간
                  <br />
                  소중한 분의 마지막 여정을
                  <br />
                  따뜻한 배려로 함께하는
                </>
              ) : (
                <>
                  고귀한 삶의 마지막 순간
                  <br />
                  소중한 분의 마지막 여정을 따뜻한 배려로 함께하는
                </>
              )}
            </AnimatedTxt>
            <Row gap={10} alignItems="flex-end">
              <AnimatedTxt
                fontFamily="JejuMyeongjo"
                fontSize="4.5rem"
                mobileFontSize="2.4rem"
                color="white"
                lineHeight="160%"
              >
                영주현대장례식장
              </AnimatedTxt>
              <AnimatedTxt
                fontFamily="JejuMyeongjo"
                fontSize="4rem"
                mobileFontSize="2rem"
                color="white"
                lineHeight="180%"
              >
                입니다.
              </AnimatedTxt>
            </Row>
          </Col>
        </div>
      </div>

      {isMobile ? (
        <div
          css={css`
            display: flex;
            width: 100%;

            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 50px 20px 0;
            gap: 40px;
          `}
        >
          <MainOneImage
            css={css`
              width: 100%;
              height: auto;
            `}
          />
          <MainTwoImage
            css={css`
              width: 100%;
              height: auto;
            `}
          />
        </div>
      ) : (
        <div
          css={css`
            display: flex;
            width: 100%;
            justify-content: center;
            align-items: center;
            padding: ${isTablet ? "0 30px" : isMobile ? "0 20px" : "0 70px"};
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
      )}

      <Col
        justifyContent="center"
        alignItems="center"
        gap={isMobile ? 20 : 40}
        padding="150px 0 100px"
      >
        <Txt
          fontFamily="JejuMyeongjo"
          fontSize="5rem"
          mobileFontSize="2.5rem"
          color="#1F2236"
          lineHeight="160%"
        >
          "고인과 가족을 위한 따뜻한 공간"
        </Txt>
        <Txt
          fontFamily="JejuGothic"
          fontSize="2.6rem"
          mobileFontSize="1.3rem"
          color="#545454"
          lineHeight="180%"
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
        gap={isMobile ? 20 : 40}
        padding="70px 0 150px"
      >
        <Txt
          fontFamily="JejuGothic"
          fontSize="4rem"
          mobileFontSize="2.4rem"
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
        gap={isMobile ? 20 : 40}
        padding={isMobile ? "0 20px 150px" : "0 90px 150px"}
      >
        <Txt
          fontFamily="JejuGothic"
          fontSize="4rem"
          mobileFontSize="2.4rem"
          color="#1F2236"
          lineHeight="160%"
        >
          분향실안내
        </Txt>
        <div
          css={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            flexDirection: isMobile ? "column" : "row",
            gap: 40,
          }}
        >
          <Col gap={10} justifyContent="flex-start" alignItems="center">
            <Room1_1
              css={css`
                width: 100%;
                height: auto;
              `}
            />
            <Txt
              fontFamily="JejuMyeongjo"
              fontSize="2.4rem"
              mobileFontSize="1.6rem"
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
              mobileFontSize="1.2rem"
              color="#545454"
              lineHeight="150%"
              css={css`
                width: 100%;
              `}
            >
              영주현대장례식장의 특실은 고인의 가족과 가까운 분들을 위한 전용
              공간으로, 편안하고 조용한 분위기에서 추모의 시간을 가질 수 있도록
              설계되었습니다. 고급스러운 인테리어와 함께 필요한 모든 편의시설을
              갖추고 있어, 가족과 친지 분들이 보다 안락하게 지낼 수 있습니다.
            </Txt>
          </Col>
          <Col gap={10} justifyContent="flex-start" alignItems="center">
            <Room2_1
              css={css`
                width: 100%;
                height: auto;
              `}
            />
            <Txt
              fontFamily="JejuMyeongjo"
              fontSize="2.4rem"
              mobileFontSize="1.6rem"
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
              mobileFontSize="1.2rem"
              color="#545454"
              lineHeight="150%"
              css={css`
                width: 100%;
              `}
            >
              고인의 영정 사진과 함께 고인을 모시는 공간으로, 친척 및 가까운
              분들이 추모의 뜻을 표할 수 있는 공간입니다. 아늑한 공간으로
              가족분들이 함께 모여 고인을 기억하고 기릴 수 있는의미 있는 시간이
              될 것입니다.
            </Txt>
          </Col>
        </div>
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
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Contact = styled.div`
  padding-left: 5px;
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

// 1) keyframes 정의
const slideUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

// 2) Txt를 감싸는 Styled Component
//    처음 렌더 시 자동으로 애니메이션 실행되게 설정
const AnimatedTxt = styled(Txt)`
  animation: ${slideUp} 1s ease forwards;
  /* 0.8초 동안 ease로 애니메이션, forwards로 최종 상태 유지 */
`;

export default Home;
