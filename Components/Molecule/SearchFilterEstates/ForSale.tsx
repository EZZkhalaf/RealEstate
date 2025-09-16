import React from "react";

interface ForSaleInterface {
  options: string[];
  selectedOption: string;
  onChange: (value: string) => void;
}

const ForSale: React.FC<ForSaleInterface> = ({
  options,
  selectedOption,
  onChange,
}) => {
  const handleChange = (option: string) => {
    onChange(option); // Call the parent onChange
  };

  return (
    <div className="flex flex-col gap-2 py-3 items-start fixed bg-white border border-gray-300 rounded-lg px-4 w-[300px] shadow-2xl">
      {options?.map((option) => (
        <label
          key={option}
          className="flex items-center text-gray-700 gap-3 text-xl p-2 rounded-lg cursor-pointer hover:text-blue-400 transition-colors duration-300 w-full"
        >
          <input
            type="radio"
            name="myRadioGroup"
            value={option}
            checked={selectedOption === option}
            onChange={() => handleChange(option)}
            className="accent-blue-500 w-6 h-6"
          />
          <span>{option}</span>
        </label>
      ))}
    </div>
  );
};

export default ForSale;
