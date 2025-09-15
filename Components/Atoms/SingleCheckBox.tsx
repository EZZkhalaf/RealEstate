import React from "react";

interface SingleCheckBoxInterface {
  text: string;
  noPadding?: boolean;
}
const SingleCheckBox: React.FC<SingleCheckBoxInterface> = ({
  text,
  noPadding,
}) => {
  return (
    <div
      className={`flex flex-row gap-1 items-center ${!noPadding ? "px-4" : ""}`}
    >
      <div className="flex items-center border-2 border-gray-200">
        <input type="checkbox" className=" rounded-lg w-5 h-5" />
      </div>
      <p className="text-lg text-gray-600 ">{text}</p>
    </div>
  );
};

export default SingleCheckBox;
