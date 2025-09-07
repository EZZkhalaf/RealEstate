import React from "react";
import { Icon } from "@iconify/react";

const InputGray = ({ type, placeholder, icon, additionalCss }) => {
  return (
    <div
      className={`flex justify-around items-center bg-gray-200 rounded-lg p-2 w-full ${additionalCss}`}
    >
      <input
        type={`${type}`}
        placeholder={`${placeholder}`}
        className="bg-gray-200 rounded-lg p-1 w-full "
      />
      {icon && <Icon icon={`mdi:${icon}`} height="25" width="25" />}
    </div>
  );
};

export default InputGray;
