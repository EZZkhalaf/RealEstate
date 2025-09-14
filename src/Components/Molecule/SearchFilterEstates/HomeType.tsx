import React, { useState } from "react";
import GrayHeader from "../../Atoms/GrayHeader";
import SubmitButton from "../../Atoms/SubmitButton";

const HomeType = () => {
  const options: string[] = [
    "House",
    "Apartment",
    "Villa",
    "Townhouse",
    "Penthouse",
  ];
  const [selected, setSelected] = useState<any>([]);
  const [selectAll, setSelectAll] = useState<boolean>(false);

  const toggleSelectAll = () => {
    if (selectAll) {
      setSelected([]);
    } else {
      setSelected(options);
    }
    setSelectAll(!selectAll);
  };

  const toggleOption = (option: string) => {
    setSelected((prev: any) =>
      prev.includes(option)
        ? prev.filter((o: any) => o !== option)
        : [...prev, option]
    );
  };

  return (
    <div className="flex flex-col mt-3 fixed bg-white border border-gray-300 rounded-lg shadow-2xl w-[25vw]">
      <GrayHeader header={"Home Type"} />

      {/* Select All / Deselect All */}
      <div
        onClick={toggleSelectAll}
        className="gap-1 bg-gray-200 px-4 text-sm text-blue-500 hover:underline hover:text-blue-600 font-bold flex items-center w-full mb-2 pb-2 cursor-pointer"
      >
        <input
          type="checkbox"
          checked={selectAll}
          readOnly
          className="rounded-full"
        />
        <p>{selectAll ? "Deselect All" : "Select All"}</p>
      </div>

      {/* Options */}
      <div className="flex flex-col gap-2 px-4 py-3">
        {options.map((option) => (
          <label
            key={option}
            className="flex items-center gap-3 cursor-pointer select-none"
          >
            <input
              type="checkbox"
              checked={selected.includes(option)}
              onChange={() => toggleOption(option)}
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
