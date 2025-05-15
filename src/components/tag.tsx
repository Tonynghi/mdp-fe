type TagProps = {
  label: string;
  backgroundColor: string;
  textColor: string;
};

const Tag = ({ label, backgroundColor, textColor }: TagProps) => {
  return (
    <div
      style={{ backgroundColor, color: textColor }}
      className="relative px-2 py-1 rounded-lg font-bold flex items-center justify-center"
    >
      {label}
    </div>
  );
};

export default Tag;
