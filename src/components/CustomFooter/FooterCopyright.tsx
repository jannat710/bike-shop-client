import { Typography } from "antd";

const { Text } = Typography;

const FooterCopyright = () => {
  return (
    <Text className="text-white opacity-70 w-full flex justify-center lg:justify-start">
      Copyright © {new Date().getFullYear()}. All Rights Reserved.
    </Text>
  );
};

export default FooterCopyright;
