import { Layout, Row, Col } from "antd";
import FooterCopyright from "./FooterCopyright";
import FooterLogo from "./FooterLogo";
import FooterSocialMedia from "./FooterSocialMedia";

const { Footer } = Layout;

const CustomFooter = () => {
  return (
    <Footer
      style={{ backgroundColor: "#000", color: "#fff", padding: "64px 0px" }}
    >
      <Row justify="space-between" align="middle">
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
