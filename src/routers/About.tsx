import { Col } from "@components/flex/Flex";
import Footer from "@components/footer/Footer";
import SubHeader from "@components/header/SubHeader";
import Txt from "@components/text/Txt";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import {
  BathRoom,
  RestRoom,
  Room_1_1,
  Room_1_2,
  Room_1_3,
  Room_1_4,
  Room_1_5,
  Room_1_6,
  Room_2_1,
  Room_2_2,
  Room_2_3,
  Room_2_4,
} from "@images/index";
import { useEffect, useRef, useState } from "react";
import useCaculateInnerSize from "src/hook/useCaculateInnerSize";

const About = () => {
  const { isMobile, isTablet } = useCaculateInnerSize();

  const restRoomRef = useRef<SVGSVGElement>(null);

  const [restRoomHeight, setRestRoomHeight] = useState(0);

  useEffect(() => {
    if (restRoomRef.current) {
      setRestRoomHeight(restRoomRef.current.clientHeight);
    }
  }, [window.innerWidth]);

  return (
    <Col
      justifyContent="center"
      alignItems="center"
      css={css`
        width: 100%;
        position: relative;
      `}
    >
      <SubHeader title="시설안내" />
      <Col
        gap={10}
        justifyContent="flex-start"
        alignItems="center"
        padding={
          isTablet ? "80px 100px 0" : isMobile ? "80px 20px 0" : "80px 200px 0"
        }
      >
        <Txt
          fontFamily="JejuGothic"
          fontSize="4rem"
          mobileFontSize="2.4rem"
          color="#000"
          lineHeight="150%"
          align="center"
          css={css`
            width: 100%;
          `}
        >
          특실
        </Txt>
        <Txt
          fontFamily="JejuMyeongjo"
          fontSize="2rem"
          mobileFontSize="1.4rem"
          color="#545454"
          lineHeight="150%"
          align="center"
          css={css`
            width: 100%;
          `}
        >
          가족과 가까운 분들을 위한 전용 공간으로, 고급스러운 인테리어와
          편의시설을 갖춰 편안한 추모가 가능합니다.
        </Txt>
        <Col
          gap={40}
          justifyContent="center"
          alignItems="center"
          padding={"40px 0"}
          css={css`
            width: 100%;
          `}
        >
          <ImageContainer isMobile={isMobile}>
            <Room_1_1
              css={css`
                width: 100%;
                height: auto;
              `}
            />
            <Room_1_2
              css={css`
                width: 100%;
                height: auto;
              `}
            />
          </ImageContainer>
          <ImageContainer isMobile={isMobile}>
            <Room_1_3
              css={css`
                width: 100%;
                height: auto;
              `}
            />
            <Room_1_4
              css={css`
                width: 100%;
                height: auto;
              `}
            />
          </ImageContainer>
          <ImageContainer isMobile={isMobile}>
            <Room_1_5
              css={css`
                width: 100%;
                height: auto;
              `}
            />
            <Room_1_6
              css={css`
                width: 100%;
                height: auto;
              `}
            />
          </ImageContainer>
        </Col>
      </Col>
      <Col
        gap={10}
        justifyContent="flex-start"
        alignItems="center"
        padding={
          isTablet ? "80px 100px 0" : isMobile ? "80px 20px 0" : "80px 200px 0"
        }
      >
        <Txt
          fontFamily="JejuGothic"
          fontSize="4rem"
          mobileFontSize="2.4rem"
          color="#000"
          lineHeight="150%"
          align="center"
          css={css`
            width: 100%;
          `}
        >
          1분향실
        </Txt>
        <Txt
          fontFamily="JejuMyeongjo"
          fontSize="2rem"
          mobileFontSize="1.4rem"
          color="#545454"
          lineHeight="150%"
          align="center"
          css={css`
            width: 100%;
          `}
        >
          고인의 영정사진과 함께 고인을 모시는 아늑한 공간으로, 가족과 친지들이
          함께 고인을 추모할 수 있습니다.
        </Txt>
        <Col
          gap={40}
          justifyContent="center"
          alignItems="center"
          padding={"40px 0"}
          css={css`
            width: 100%;
          `}
        >
          <ImageContainer isMobile={isMobile}>
            <Room_2_1
              css={css`
                width: 100%;
                height: auto;
              `}
            />
            <Room_2_2
              css={css`
                width: 100%;
                height: auto;
              `}
            />
          </ImageContainer>
          <ImageContainer isMobile={isMobile}>
            <Room_2_3
              css={css`
                width: 100%;
                height: auto;
              `}
            />
            <Room_2_4
              css={css`
                width: 100%;
                height: auto;
              `}
            />
          </ImageContainer>
        </Col>
      </Col>
      <Col
        gap={10}
        justifyContent="flex-start"
        alignItems="center"
        padding={
          isTablet ? "80px 100px 0" : isMobile ? "80px 20px 0" : "80px 200px 0"
        }
      >
        <Txt
          fontFamily="JejuGothic"
          fontSize="4rem"
          mobileFontSize="2.4rem"
          color="#000"
          lineHeight="150%"
          align="center"
          css={css`
            width: 100%;
          `}
        >
          편의시설
        </Txt>
        <Col
          gap={40}
          justifyContent="center"
          alignItems="center"
          padding={"40px 0"}
          css={css`
            width: 100%;
          `}
        >
          <ImageContainer isMobile={isMobile}>
            <RestRoom
              ref={restRoomRef}
              css={css`
                width: 100%;
                height: auto;
              `}
            />
            <BathRoom
              css={css`
                width: 100%;
                height: ${isMobile ? "100%" : `${restRoomHeight}px`};
              `}
            />
          </ImageContainer>
        </Col>
      </Col>
      <Footer />
    </Col>
  );
};

const ImageContainer = styled.div<{ isMobile?: boolean }>`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) => (props.isMobile ? "column" : "row")};
  gap: 40px;
`;

export default About;
