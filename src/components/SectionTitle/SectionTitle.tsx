interface SectionTitleProps {
  subtitle: string;
  title: string;
}
const SectionTitle = ({ subtitle, title }: SectionTitleProps) => {
  return (
    <div className="text-center py-20">
      <p className="text-primary font-medium text-lg uppercase">{subtitle}</p>
      <h1 className="text-white font-semibold text-5xl pt-4">{title}</h1>
    </div>
  );
};

export default SectionTitle;
