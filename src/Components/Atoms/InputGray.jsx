import React from "react";
import { Icon } from "@iconify/react";

const InputGray = ({ type, placeholder, icon, additionalCss, onChange }) => {
  return (
    <div
      className={`flex justify-around items-center bg-gray-200 rounded-lg p-2 w-full ${additionalCss} font-semibold`}
    >
      <input
        type={`${type}`}
        placeholder={`${placeholder}`}
        className="bg-gray-200 rounded-lg py-1 w-full border-none"
        onChange={onChange}
      />
      {icon && <Icon icon={`mdi:${icon}`} height="25" width="25" />}
    </div>
  );
};

export default InputGray;
