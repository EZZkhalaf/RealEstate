import React from "react";
import { MdArrowOutward } from "react-icons/md";

const ViewButtonAtom = ({
  title,
  navigateTo,
  color,
  hoverColor,
  textColor,
  hoverTextColor,
  onClick,
}) => {
  return (
    <div>
      <div
        className={`flex flex-row justify-around items-center p-3 border  border-[#0B3557] font-bold rounded-lg  transition-colors duration-300 hover:opacity-90`}
        style={{
          backgroundColor: color,
          color: textColor,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = hoverColor;
          e.currentTarget.style.color = hoverTextColor;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = color;

          e.currentTarget.style.color = textColor;
        }}
      >
        <button
          onClick={onClick}
          className=" w-full flex justify-center items-center gap-2"
        >
          {title}
          <MdArrowOutward />
        </button>
      </div>
    </div>
  );
};

export default ViewButtonAtom;
