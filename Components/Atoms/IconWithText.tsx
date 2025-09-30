import { Icon } from "@iconify/react";

interface IconWithTextInterface {
  icon: string;
  text: string;
  textColor?: string;
  bgColor?: string;
  iconCss?: string;
}

const IconWithText: React.FC<IconWithTextInterface> = ({
  icon,
  text,
  textColor = "text-gray-500 text-xs",
  bgColor = "",
  iconCss = "",
}) => {
  return (
    <div className={`flex gap-1 items-center  ${bgColor}`}>
      <Icon icon={`mdi:${icon}`} width={15} className={`${iconCss}`} />
      <p className={`${textColor} hover:underline  leading-none `}>{text}</p>
    </div>
  );
};

export default IconWithText;
