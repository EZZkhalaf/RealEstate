import React from "react";

const SingleCheckBox = ({ text }) => {
  return (
    <div className="flex flex-row gap-1 items-center px-4 ">
      <div className="flex items-center border-2 border-gray-200">
        <input type="checkbox" className=" rounded-lg w-5 h-5" />
      </div>
      <p className="text-lg text-gray-600 ">{text}</p>
    </div>
  );
};

export default SingleCheckBox;
