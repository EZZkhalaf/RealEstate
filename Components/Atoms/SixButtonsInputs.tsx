import React from "react";

interface SixButtonsInputsInterface {
  title: string;
  options: any;
  selected: any;
  setSelected: any;
}

const SixButtonsInputs: React.FC<SixButtonsInputsInterface> = ({
  title,
  options,
  selected,
  setSelected,
}) => {
  return (
    <div className="flex flex-col items-start gap-2 px-4 w-full">
      <p className="font-bold text-gray-500">{title}</p>
      <div className="flex flex-row border border-gray-300 w-full">
        {options.map((op: any, index: number) => (
          <button
            key={index}
            onClick={() => setSelected(selected === op ? null : op)}
            className={`p-3 text-md font-semibold  w-full hover:bg-gray-200 transform-color duration-300 ${
              selected === op
                ? " border-2 border-blue-500"
                : "border border-gray-300"
            }`}
          >
            {op}
            {op !== "Any" && "+"}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SixButtonsInputs;
