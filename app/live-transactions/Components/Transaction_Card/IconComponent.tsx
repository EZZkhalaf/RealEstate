export const IconComponent = ({
  icon,
  bgColor = "bg-[#0B3557]",
}: {
  icon: React.ReactNode;
  bgColor?: string;
}) => {
  return (
    <div
      className={`${bgColor} w-12 h-12 p-3 rounded-lg flex items-center justify-center`}
    >
      {icon}
    </div>
  );
};
