import React from "react";

const SmallTitle = ({ title, padding = true }) => {
  return (
    <label
      className={`text-sm text-gray-600 mb-1 font-bold ${padding && "px-4"}`}
    >
      {title}
    </label>
  );
};

export default SmallTitle;
