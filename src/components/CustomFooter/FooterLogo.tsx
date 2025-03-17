import { Image } from "antd";
import brandImg from "../../assets/images/brandlogo.png";

const FooterLogo = () => {
  return (
    <div className="flex justify-center items-center py-4">
      <Image src={brandImg} alt="Brand Logo" height={48} />
    </div>
  );
};

export default FooterLogo;
