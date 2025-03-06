import { Row } from "@components/flex/Flex";
import Txt from "@components/text/Txt";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface SliderCardProps {
  image: string;
  nameInfo: string;
  monutaryInfo: string;
  mournerInfo: string;
  startDateInfo: string;
  endDateInfo: string;
  locationInfo: string;
  height?: string;
}

const SliderCard = ({
  image,
  nameInfo,
  monutaryInfo,
  mournerInfo,
  startDateInfo,
  endDateInfo,
  locationInfo,
  height = "auto",
}: SliderCardProps) => {
  return (
    <SliderContainer height={height}>
      <img
        src={image}
        alt="slider"
        css={css`
          width: 80px;
          height: 100px;
          background-color: #d9d9d9;
        `}
      />
      <Row gap={15}>
        <NameCard>고인명</NameCard>
        <Txt fontSize="14px" color="#1F2236" lineHeight="24px">
          {nameInfo}
        </Txt>
      </Row>
      <Row gap={15}>
        <NameCard>빈소</NameCard>
        <Txt fontSize="14px" color="#1F2236" lineHeight="24px">
          {mournerInfo}
        </Txt>
      </Row>
      <Row gap={15}>
        <NameCard>유가족</NameCard>
        <Txt
          fontSize="14px"
          color="#1F2236"
          lineHeight="24px"
          css={css`
            max-width: 150px;
            word-wrap: break-word;
            overflow-wrap: break-word;
            white-space: normal;
          `}
        >
          {monutaryInfo}
        </Txt>
      </Row>
      <Row gap={15}>
        <NameCard>장지</NameCard>
        <Txt
          fontSize="14px"
          color="#1F2236"
          lineHeight="24px"
          css={css`
            max-width: 150px;
            word-wrap: break-word;
            overflow-wrap: break-word;
            white-space: normal;
          `}
        >
          {locationInfo}
        </Txt>
      </Row>
      <Row gap={15}>
        <NameCard>입관일시</NameCard>
        <Txt fontSize="14px" color="#1F2236" lineHeight="24px">
          {startDateInfo}
        </Txt>
      </Row>
      <Row gap={15}>
        <NameCard>발인일시</NameCard>
        <Txt fontSize="14px" color="#1F2236" lineHeight="24px">
          {endDateInfo}
        </Txt>
      </Row>
    </SliderContainer>
  );
};

const SliderContainer = styled.div<{ height: string }>`
  width: 280px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-top: 2px solid #010101;
  border-bottom: 1px solid #d9d9d9;
  border-left: 1px solid #d9d9d9;
  border-right: 1px solid #d9d9d9;
  padding: 20px 25px;
  gap: 20px;
`;

const NameCard = styled.div`
  flex-shrink: 0;
  width: 70px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "JejuGothic";
  font-size: 14px;
  line-height: 24px;
  color: #fff;
  background-color: #31354e;
`;

export default SliderCard;
