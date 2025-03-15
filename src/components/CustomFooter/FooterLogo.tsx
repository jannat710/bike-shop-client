import brandImg from "../../assets/images/brandlogo.png";
const FooterLogo = () => {
  return (
    <div className="flex justify-center items-center py-2">
      <img src={brandImg} alt="Brand Logo" className="h-12" />
    </div>
  );
};

export default FooterLogo;
