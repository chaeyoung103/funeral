import { Row } from "@components/flex/Flex";
import Txt from "@components/text/Txt";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { LogoIcon, MenuIcon } from "@images/index";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useCaculateInnerSize from "src/hook/useCaculateInnerSize";

const Header = () => {
  const { isMobile, isTablet } = useCaculateInnerSize();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = ["시설안내", "오시는길"];

  // 바깥을 클릭하면 닫히도록
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <Row
      padding={isTablet || isMobile ? "22px 30px 22px 20px" : "44px 70px"}
      justifyContent="space-between"
      alignItems="center"
      css={css`
        z-index: 10;
      `}
    >
      <Row
        justifyContent="flex-start"
        alignItems="center"
        onClick={() => navigate("/")}
        css={css`
          cursor: pointer;
        `}
      >
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
      <Row
        gap={30}
        justifyContent="flex-end"
        alignItems="center"
        css={css`
          width: fit-content;
        `}
      >
        {isTablet || isMobile ? (
          <div
            ref={menuRef}
            css={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MenuIcon
              onClick={toggleMenu}
              css={css`
                cursor: pointer;
                z-index: 100;
              `}
            />
            <DropdownMenu className={isMenuOpen ? "open" : ""}>
              {menuItems.map((item, index) => (
                <MenuItem
                  key={index}
                  onClick={() =>
                    navigate(item === "시설안내" ? "/about" : "/contact")
                  }
                >
                  {item}
                </MenuItem>
              ))}
            </DropdownMenu>
          </div>
        ) : (
          <>
            <Txt
              fontFamily="JejuGothic"
              fontSize="2rem"
              color="white"
              letterSpacing="1px"
              onClick={() => navigate("/about")}
              css={css`
                cursor: pointer;
              `}
            >
              시설안내
            </Txt>
            <Txt
              fontFamily="JejuGothic"
              fontSize="2rem"
              color="white"
              letterSpacing="1px"
              onClick={() => navigate("/contact")}
              css={css`
                cursor: pointer;
              `}
            >
              오시는길
            </Txt>
          </>
        )}
      </Row>
    </Row>
  );
};

export default Header;

const DropdownMenu = styled.div`
  position: absolute;
  top: 70px; /* 버튼 높이만큼 아래에 위치 */
  right: 5px; /* 오른쪽 정렬 */
  min-width: 100px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  padding: 8px 0;
  z-index: 1000; /* 다른 요소 위에 표시 */
  overflow: hidden; /* 슬라이드 애니메이션을 위해 overflow hidden */

  /* transition으로 높이와 투명도를 조절 */
  max-height: 0;
  opacity: 0;
  transition: max-height 0.4s ease, opacity 0.4s ease;

  /* 메뉴가 열릴 때 클래스를 추가하여 스타일 변경 */
  &.open {
    max-height: 200px; /* 충분히 큰 값으로 */
    opacity: 1;
  }
`;

const MenuItem = styled.div`
  padding: 8px 16px;
  font-size: 14px;
  color: #333;
  cursor: pointer;

  &:hover {
    background-color: #f2f2f2;
  }
`;
