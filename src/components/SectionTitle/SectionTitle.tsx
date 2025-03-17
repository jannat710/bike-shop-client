import { Typography } from "antd";

const { Text } = Typography;

interface SectionTitleProps {
  subtitle: string;
  title: string;
}
const SectionTitle = ({ subtitle, title }: SectionTitleProps) => {
  return (
    <div className="text-center py-20">
      <Text className="text-primary font-medium text-lg uppercase">
        {subtitle}
      </Text>
      <h1 className="text-white font-semibold text-5xl">{title}</h1>
    </div>
  );
};

export default SectionTitle;
