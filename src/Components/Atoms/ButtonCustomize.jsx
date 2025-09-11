import React from "react";
import { Icon } from "@iconify/react";
const ButtonCustomize = ({
  icon,
  text,
  color,
  hoverColor,
  textColor,
  hoverTextColor,
  rounded = "lg",
  padding = "2",
  onClick,
}) => {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`flex flex-row w-fit h-full items-center bg-[#${color}] hover:bg-${hoverColor} text-[#${textColor}] hover:text-${hoverTextColor} gap-2 p-${padding} w-full justify-center rounded-${rounded} border border-gray-300 font-bold text-sm duration-300`}
      style={{
        backgroundColor: isHovered ? hoverColor : color,
        color: isHovered ? hoverTextColor : textColor,
      }}
    >
      {icon && (
        <Icon
          icon={`mdi-light:${icon}`}
          height="20"
          width="20"
          className="font-bold"
        />
      )}
      <p className="font-medium  text-sm">{text}</p>
    </button>
  );
};

export default ButtonCustomize;
