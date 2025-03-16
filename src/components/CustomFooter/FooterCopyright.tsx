import { Typography } from "antd";

const { Text } = Typography;

const FooterCopyright = () => {
  return (
    <Text
      style={{
        textAlign: "center",
        color: "#fff",
        opacity: 0.7,
        display: "block",
        width: "100%",
      }}
    >
      Copyright © {new Date().getFullYear()}. All Rights Reserved.
    </Text>
  );
};

export default FooterCopyright;
