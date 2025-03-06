import { Col } from "@components/flex/Flex";
import Footer from "@components/footer/Footer";
import SubHeader from "@components/header/SubHeader";
import { css } from "@emotion/react";

const Contact = () => {
  return (
    <Col
      justifyContent="center"
      alignItems="center"
      css={css`
        width: 100%;
        position: relative;
      `}
    >
      <SubHeader title="오시는길" />
      <Footer />
    </Col>
  );
};

export default Contact;
