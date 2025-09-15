import React from "react";
import { Icon } from "@iconify/react";

interface InputGrayInterface {
  type?: string;
  placeholder?: string;
  icon?: string;
  additionalCss?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  header?: string;
  additionalInputCss?: string;
}
const InputGray: React.FC<InputGrayInterface> = ({
  type,
  placeholder,
  icon,
  additionalCss,
  onChange,
  header,
  additionalInputCss,
}) => {
  return (
    <div className="flex flex-col gap-3 w-full">
      {header && <h1 className="font-bold">{header}</h1>}
      <div
        className={`flex justify-around items-center bg-gray-200 rounded-lg p-2  ${additionalCss} font-semibold`}
      >
        <input
          type={`${type}`}
          placeholder={`${placeholder}`}
          className={`bg-gray-200 rounded-lg py-1 w-full border-none ${additionalInputCss}`}
          onChange={onChange}
        />
        {icon && <Icon icon={`mdi:${icon}`} height="25" width="25" />}
      </div>
    </div>
  );
};

export default InputGray;
