import { css } from "@emotion/react";

export const globalStyles = css`
  @import "~slick-carousel/slick/slick.css";
  @import "~slick-carousel/slick/slick-theme.css";

  @font-face {
    font-family: "JejuGothic";
    src: url("/fonts/JejuGothicOTF.otf") format("opentype");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "JejuMyeongjo";
    src: url("fonts/JejuMyeongjoOTF.otf") format("opentype");
    font-weight: normal;
    font-style: normal;
  }
  * {
    box-sizing: border-box;
    font-family: "JejuGothic", "JejuMyeongjo", sans-serif;
  }

  html {
    box-sizing: border-box;
    font-family: "JejuGothic", "JejuMyeongjo", sans-serif;
    font-size: 62.5%;
  }

  html,
  body,
  #root {
    width: 100vw;
    height: calc(var(--vh, 1vh) * 100);
    margin: 0 auto;
    background-color: white;

    -webkit-overflow-scrolling: touch !important;
    -ms-overflow-style: none;
    scrollbar-width: none;

    ::-webkit-scrollbar {
      display: none;
    }
  }

  button {
    padding: 0;
    overflow: visible;
    cursor: pointer;
    background: inherit;
    border: none;
    border-radius: 0;
    box-shadow: none;
  }
`;
