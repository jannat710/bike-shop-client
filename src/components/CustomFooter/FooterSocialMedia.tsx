import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGooglePlusSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Space, Typography } from "antd";

const { Text } = Typography;

const FooterSocialMedia = () => {
  return (
    <Space
      size="middle"
      className="flex justify-center lg:justify-end items-center"
    >
      <Text className="text-white font-bold hidden sm:block">SOCIAL MEDIA</Text>
      <Link
        to="https://www.facebook.com/jannatulfee"
        className="hover:text-primary"
      >
        <FaFacebookSquare className="text-2xl " />
      </Link>
      <Link to="https://x.com/jannatul_zz" className="hover:text-primary">
        <FaSquareXTwitter className="text-2xl" />
      </Link>
      <Link to="mailto:jannatul0040@gmail.com" className="hover:text-primary">
        <FaGooglePlusSquare className="text-2xl" />
      </Link>
    </Space>
  );
};

export default FooterSocialMedia;
