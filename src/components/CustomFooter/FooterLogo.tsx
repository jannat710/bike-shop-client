import { Image } from "antd";
import brandImg from "../../assets/images/brandlogo.png";

const FooterLogo = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "16px 0",
      }}
    >
      <Image src={brandImg} alt="Brand Logo" height={48} />
    </div>
  );
};

export default FooterLogo;
