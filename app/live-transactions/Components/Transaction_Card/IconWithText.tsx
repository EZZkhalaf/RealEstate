export const IconWithText = ({
  icon,
  text,
  textColor = "text-gray-500",
}: {
  icon: React.ReactNode;
  text: string;
  textColor?: string;
}) => {
  return (
    <div className={` flex  text-xs ${textColor} gap-1 items-center`}>
      <div>{icon}</div>
      <p>{text}</p>
    </div>
  );
};
