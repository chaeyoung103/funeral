import styled from "@emotion/styled";

interface TextProps extends React.HTMLAttributes<HTMLDivElement> {
  fontSize?: string;
  mobileFontSize?: string;
  mobileLineHeight?: string;
  color?: string;
  align?: string;
  lineHeight?: string;
  fontFamily?: string;
  letterSpacing?: string;
}

const Txt = styled.span<TextProps>`
  font-size: ${({ fontSize }) => fontSize || "inherit"};
  font-family: ${({ fontFamily }) => fontFamily || "inherit"};
  line-height: ${({ lineHeight }) => (lineHeight ? lineHeight : "inherit")};
  color: ${({ color }) => color || "black"};
  text-align: ${({ align }) => align || "inherit"};
  letter-spacing: ${({ letterSpacing }) => letterSpacing || "inherit"};
  flex-shrink: 0;
  @media screen and (max-width: 768px) {
    font-size: ${({ mobileFontSize, fontSize }) =>
      mobileFontSize || fontSize || "inherit"};
    line-height: ${({ mobileLineHeight, lineHeight }) =>
      mobileLineHeight || lineHeight || "inherit"};
  }
`;

export default Txt;
