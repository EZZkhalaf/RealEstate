import React from "react";

const InputGray = ({ type, placeholder }) => {
  return (
    <input
      type={`${type}`}
      placeholder={`${placeholder}`}
      className="bg-gray-300 rounded-lg p-2 w-full "
    />
  );
};

export default InputGray;
