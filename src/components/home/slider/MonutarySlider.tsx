import SliderCard from "./SliderCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";

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
  const settings = {
    dots: true, // 페이지네이션 (점)
    infinite: false, // 마지막 페이지에서 처음으로 순환
    slidesToShow: 4, // 한 번에 보여줄 카드 개수
    slidesToScroll: 4, // 한 번에 넘길 카드 개수
    arrows: true, // 좌우 화살표 활성화
    autoplay: true, // 자동 재생
    speed: 1000, // 넘어가는 속도
    autoplaySpeed: 5000, // 자동 재생 속도
  };
  return (
    <StyledSlider {...settings}>
      {infoList.map((info, index) => (
        <SliderCardWrapper>
          <SliderCard
            key={index}
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
  );
};

const StyledSlider = styled(Slider)`
  width: 1200px; // 슬라이더를 가운데 정렬하기 위해 너비를 줄입니다.
  height: 550px; // 슬라이더의 높이를 200px로 설정합니다.

  .slick-slide {
    padding: 0 5px; // 슬라이더 아이템 사이의 간격을 20px로 설정합니다 (양쪽에 10px씩).
  }

  .slick-list {
    margin: 0 -5px; // 슬라이더 아이템 사이의 간격을 맞추기 위해.
  }

  .slick-prev {
    left: -50px; // 이전 버튼을 왼쪽으로 50px 이동합니다.
    background: url(/prev.svg); // 이전 버튼 이미지를 설정합니다.
    background-size: contain;
  }

  .slick-next {
    right: -50px; // 다음 버튼을 오른쪽으로 50px 이동합니다.
    background: url(/next.svg); // 이전 버튼 이미지를 설정합니다.
    background-size: contain;
  }
  .slick-prev:before,
  .slick-next:before {
    content: "";
  }
`;

const SliderCardWrapper = styled.div`
  padding: 5px;
`;

export default MonutarySlider;
