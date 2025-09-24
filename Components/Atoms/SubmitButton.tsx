import { SubmitButtonInterface } from "@/Interface/EstateInterface";
import React from "react";

const SubmitButton: React.FC<SubmitButtonInterface> = ({
  text,
  type,
  submitButtonCss,
  onClick,
  noPadding = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${
        submitButtonCss
          ? `bg-blue-600 text-white ${
              !noPadding ? "px" : ""
            } py-2 rounded hover:bg-green-700`
          : "w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 "
      }`}
    >
      {text}
    </button>
  );
};

export default SubmitButton;
