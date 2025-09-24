import { SingleCheckBoxInterface } from "@/Interface/ServicesInterface";
import React from "react";

const SingleCheckBox: React.FC<SingleCheckBoxInterface> = ({
  text,
  noPadding,
  checked,
  value,
  onChange,
}) => {
  return (
    <div
      className={`flex flex-row gap-1 items-center ${!noPadding ? "px-4" : ""}`}
    >
      <div className="flex items-center border-2 border-gray-200">
        <input
          type="checkbox"
          onClick={onChange}
          className=" rounded-lg w-5 h-5"
        />
      </div>
      <p className="text-lg text-gray-600 ">{text}</p>
    </div>
  );
};

export default SingleCheckBox;
