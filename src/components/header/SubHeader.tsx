import Txt from "@components/text/Txt";
import styled from "@emotion/styled";
import Header from "./Header";
import useCaculateInnerSize from "src/hook/useCaculateInnerSize";
import { css } from "@emotion/react";
import backgroundImg from "@assets/images/sub-header.png";

interface SubHeaderProps {
  title: string;
}

const SubHeader = ({ title }: SubHeaderProps) => {
  const { isMobile } = useCaculateInnerSize();

  return (
    <SubHeaderContainer isMobile={isMobile}>
      <BackGroundImg src={backgroundImg} alt="subHeader" />
      <Header />
      <Txt
        fontSize="4.8rem"
        mobileFontSize="2.4rem"
        color="#fff"
        fontFamily="JejuGohtic"
        letterSpacing="1px"
        css={css`
          position: absolute;
          bottom: 8%;
          left: 50%;
          transform: translate(-50%, -50%);
        `}
      >
        {title}
      </Txt>
    </SubHeaderContainer>
  );
};

export default SubHeader;

const SubHeaderContainer = styled.div<{ isMobile?: boolean }>`
  width: 100%;
  height: ${(props) => (props.isMobile ? "30vh" : "40vh")};
  position: relative;
  flex-direction: column;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const BackGroundImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`;
