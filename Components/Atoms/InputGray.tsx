import React from "react";
import { Icon } from "@iconify/react";
import { InputGrayInterface } from "@/Interface/ServicesInterface";

const InputGray: React.FC<InputGrayInterface> = ({
  type,
  placeholder,
  icon,
  additionalCss,
  onChange,
  header,
  additionalInputCss,
  value,
}) => {
  return (
    <div className="flex flex-col gap-3 w-full">
      {header && <h1 className="font-bold">{header}</h1>}
      <div
        className={`flex justify-around items-center bg-gray-200 rounded-lg p-2  ${additionalCss} font-sm`}
      >
        <input
          type={`${type}`}
          value={value}
          placeholder={`${placeholder}`}
          className={`bg-gray-200 rounded-lg py-1 w-full border-none focus:outline-none focus:ring-0 ${additionalInputCss}`}
          onChange={onChange}
        />
        {icon && <Icon icon={`mdi:${icon}`} height="25" width="25" />}
      </div>
    </div>
  );
};

export default InputGray;
