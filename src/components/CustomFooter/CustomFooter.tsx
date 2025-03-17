import { Layout, Row, Col } from "antd";
import FooterCopyright from "./FooterCopyright";
import FooterLogo from "./FooterLogo";
import FooterSocialMedia from "./FooterSocialMedia";

const { Footer } = Layout;

const CustomFooter = () => {
  return (
    <Footer className="bg-black py-16 text-white">
      <Row className="" align="middle">
        <Col xs={24} sm={8}>
          <FooterCopyright />
        </Col>
        <Col xs={24} sm={8} style={{ textAlign: "center" }}>
          <FooterLogo />
        </Col>
        <Col xs={24} sm={8} style={{ textAlign: "right" }}>
          <FooterSocialMedia />
        </Col>
      </Row>
    </Footer>
  );
};

export default CustomFooter;
