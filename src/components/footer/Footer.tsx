import { Row } from "@components/flex/Flex";
import Txt from "@components/text/Txt";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import useCaculateInnerSize from "src/hook/useCaculateInnerSize";

const Footer = () => {
  const { isMobile, isTablet } = useCaculateInnerSize();
  return (
    <FooterContainer>
      <Txt
        fontFamily="JejuMyeongjo"
        fontSize="2.4rem"
        mobileFontSize="1.2rem"
        color="#fff"
        lineHeight="150%"
        align="center"
        css={css`
          width: 100%;
          padding: 30px 0 20px;
        `}
      >
        오랜 경험과 신뢰를 바탕으로, 고인과 가족의 아픔을 나누며,
        <br />
        고요하고 평화로운 장례 절차를 돕겠습니다.
        <br />
        영주현대장례식장은 언제나 당신의 곁에 있습니다.
      </Txt>
      <Row justifyContent="space-between" alignItems="flex-end">
        <Txt
          fontFamily="JejuGothic"
          fontSize="1.6rem"
          mobileFontSize="0.8rem"
          color="#aaaaaa"
          lineHeight="150%"
          align="flex-start"
          css={css`
            width: 100%;
            padding: ${isTablet
              ? "20px 40px"
              : isMobile
              ? "20px 20px"
              : "20px 50px;"};
            flex-shrink: 1;
          `}
        >
          주소: 경북 영주시 가흥공단로 11 영주현대장례식장
          <br />
          대표전화 : 054-634-4400
          <br />
          Copyright © 영주현대장례식장. All Rights Reserved.
        </Txt>
        <img
          src="/flower.png"
          alt="flower"
          css={css`
            width: ${isTablet ? "180px" : isMobile ? "100px" : "338px"};
            height: ${isTablet ? "92px" : isMobile ? "51px" : "172px"};
          `}
        />
      </Row>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000;
`;
