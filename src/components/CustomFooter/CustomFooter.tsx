import { Layout } from "antd";
import FooterCopyright from "./FooterCopyright";
import FooterLogo from "./FooterLogo";
import FooterSocialMedia from "./FooterSocialMedia";

const { Footer } = Layout;

const CustomFooter = () => {
  return (
    <div>
      <Footer className="bg-black text-white py-16">
        <div className="md:flex items-center justify-between">
          <FooterCopyright />
          <FooterLogo />
          <FooterSocialMedia />
        </div>
      </Footer>
    </div>
  );
};

export default CustomFooter;
