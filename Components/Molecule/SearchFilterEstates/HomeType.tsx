import React, { useState } from "react";
import GrayHeader from "../../Atoms/GrayHeader";
import SubmitButton from "../../Atoms/SubmitButton";

interface HomeTypeProps {
  value: string | null; // selected home types
  onChange: (value: string) => void;
}

const HomeType: React.FC<HomeTypeProps> = ({ value, onChange }) => {
  const options: string[] = [
    "All Properties",
    "House",
    "Apartment",
    "Villa",
    "Townhouse",
    "Penthouse",
  ];

  return (
    <div className="flex flex-col mt-3 fixed bg-white border border-gray-300 rounded-lg shadow-2xl w-fit  ">
      <GrayHeader header={"Home Type"} />

      {/* Options */}
      <div className="flex flex-col gap-2 px-4 py-3">
        {options.map((option) => (
          <label
            key={option}
            className="flex items-center gap-3 cursor-pointer select-none"
          >
            <input
              type="radio"
              checked={value === option}
              onChange={() => onChange(option)}
              className="w-5 h-5 accent-blue-500"
            />
            <span className="text-lg text-gray-400">{option}</span>
          </label>
        ))}
      </div>
      <div className="w-full px-4 mb-2 mt-5">
        <SubmitButton text={"Apply"} />
      </div>
    </div>
  );
};

export default HomeType;
