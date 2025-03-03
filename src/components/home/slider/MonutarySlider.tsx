import SliderCard from "./SliderCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";
import useCaculateInnerSize from "src/hook/useCaculateInnerSize";
import Txt from "@components/text/Txt";

interface MonutarySliderProps {
  infoList: {
    image: string;
    nameInfo: string;
    monutaryInfo: string;
    mournerInfo: string;
    startDateInfo: string;
    endDateInfo: string;
    locationInfo: string;
  }[];
}

const MonutarySlider = ({ infoList }: MonutarySliderProps) => {
  const { innerWidth } = useCaculateInnerSize();

  let num = 0;

  if (innerWidth < 600) {
    num = 1;
  } else if (innerWidth < 900) {
    num = 2;
  } else if (innerWidth < 1200) {
    num = 3;
  } else {
    num = 4;
  }

  const settings = {
    dots: true, // 페이지네이션 (점)
    infinite: false, // 마지막 페이지에서 처음으로 순환
    slidesToShow: num, // 한 번에 보여줄 카드 개수
    slidesToScroll: num, // 한 번에 넘길 카드 개수
    arrows: true, // 좌우 화살표 활성화
    autoplay: true, // 자동 재생
    speed: 1000, // 넘어가는 속도
    autoplaySpeed: 5000, // 자동 재생 속도
  };

  return (
    <>
      {infoList.length === 0 ? (
        <Txt
          fontSize="1.6rem"
          color="#666"
          style={{ textAlign: "center", margin: "200px 0 100px" }}
        >
          현재이용중인 빈소가 없습니다
        </Txt>
      ) : (
        <StyledSlider {...settings} num={num}>
          {infoList.map((info, index) => (
            <SliderCardWrapper key={index} num={num}>
              <SliderCard
                image={info.image}
                nameInfo={info.nameInfo}
                monutaryInfo={info.monutaryInfo}
                mournerInfo={info.mournerInfo}
                startDateInfo={info.startDateInfo}
                endDateInfo={info.endDateInfo}
                locationInfo={info.locationInfo}
              />
            </SliderCardWrapper>
          ))}
        </StyledSlider>
      )}
    </>
  );
};

const StyledSlider = styled(Slider)<{ num: number }>`
  width: ${(props) =>
    props.num * 300}px; // 슬라이더의 너비를 300px로 설정합니다.
  height: 550px; // 슬라이더의 높이를 200px로 설정합니다.

  .slick-prev {
    left: ${(props) => (props.num === 1 ? -25 : -30)}px;
    background: url(/prev.svg); // 이전 버튼 이미지를 설정합니다.
    background-size: contain;
  }

  .slick-next {
    right: ${(props) => (props.num === 1 ? -25 : -30)}px;
    background: url(/next.svg); // 이전 버튼 이미지를 설정합니다.
    background-size: contain;
  }
  .slick-prev:before,
  .slick-next:before {
    content: "";
  }
`;

const SliderCardWrapper = styled.div<{ num: number }>`
  padding: 0 10px // 슬라이더 아이템 사이의 간격을 맞추기 위해.
;
`;

export default MonutarySlider;
