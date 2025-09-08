import React from "react";
import { Icon } from "@iconify/react";

const IconWithText = ({
  icon,
  text,
  textColor = "text-gray-500 text-xs",
  bgColor = "",
}) => {
  return (
    <div className={`flex gap-1 items-center ${bgColor}`}>
      <Icon icon={`mdi:${icon}`} width={20} />
      <p className={`${textColor} hover:underline  `}>{text}</p>
    </div>
  );
};

export default IconWithText;
