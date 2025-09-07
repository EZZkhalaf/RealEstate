import React from "react";

const GrayHeader = ({ header }) => {
  return (
    <div className="bg-gray-200 text-md flex w-full py-1">
      <span className="text-gray-400 font-bold p-2 px-4">{header}</span>
    </div>
  );
};

export default GrayHeader;
