"use client";

import React from "react";
import { MdArrowOutward } from "react-icons/md";

interface ViewButtonAtomInterface {
  title: string;
  color?: string;
  hoverColor?: string;
  textColor?: string;
  hoverTextColor?: string;
  onClick?: any;
  padding?: string;
}

const ViewButtonAtom: React.FC<ViewButtonAtomInterface> = ({
  title,

  color,
  hoverColor,
  textColor,
  hoverTextColor,
  onClick,
  padding = "p-3",
}) => {
  return (
    <div>
      <div
        className={`flex flex-row justify-around items-center ${padding} border  border-[#0B3557] font-semibold rounded-lg  trnasform-colors duration-300 hover:opacity-90`}
        style={{
          backgroundColor: color,
          color: textColor,
        }}
        onMouseEnter={(e) => {
          if (hoverColor) e.currentTarget.style.backgroundColor = hoverColor;
          if (hoverTextColor) e.currentTarget.style.color = hoverTextColor;
        }}
        onMouseLeave={(e) => {
          if (color) e.currentTarget.style.backgroundColor = color;

          if (textColor) e.currentTarget.style.color = textColor;
        }}
      >
        <button
          onClick={onClick}
          className=" w-full flex justify-center  items-center gap-2"
        >
          {title}
          <MdArrowOutward />
        </button>
      </div>
    </div>
  );
};

export default ViewButtonAtom;
