import React from "react";

const MulltipleCheckBoxes = ({ list = [], checked, toggleOption }) => {
  return (
    <>
      {list.map((option) => (
        <label
          key={option}
          className="flex items-center gap-3 cursor-pointer select-none"
        >
          <input
            type="checkbox"
            checked={checked.includes(option)}
            onChange={() => toggleOption(option)}
            className="w-5 h-5 accent-blue-500"
          />
          <span className="text-lg text-gray-400">{option}</span>
        </label>
      ))}
    </>
  );
};

export default MulltipleCheckBoxes;
