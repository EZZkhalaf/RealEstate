import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const PriceHero = () => {
  const [selected, setSelected] = useState(null);
  const min = 100000;
  const max = 10000000;

  const [minValue, setMinValue] = useState(100000);
  const [maxValue, setMaxValue] = useState(10000000);

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxValue - 100000);
    setMinValue(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minValue + 100000);
    setMaxValue(value);
  };

  const buttons = ["Buy", "Sell", "Invest"];
  return (
    <div className="flex flex-col items-center bg-white shadow-2xl py-5 gap-6 w-full  px-1 rounded-2xl  ">
      <div className="flex flex-row rounded-lg p-1  bg-gray-300">
        {buttons.map((b) => (
          <button
            key={b}
            onClick={() => setSelected(b)}
            className={`px-6 py-2 rounded-lg transition-colors duration-200 ${
              selected === b
                ? "bg-[#0B3557] text-white"
                : "bg-gray-300 text-gray-700"
            }`}
          >
            {b}
          </button>
        ))}
      </div>

      <div className="flex gap-4 w-full px-4">
        <div className="flex flex-row items-center bg-gray-300 p-3 gap-3 rounded-xl flex-grow ">
          <FaSearch />
          <input
            placeholder={`Enter location, property type, or keyword...`}
            className="bg-gray-300 w-full"
            // style={{ flexGrow: "6" }}
          />
        </div>
        <div className="flex items-center">
          <button
            className="px-6 py-3 text-white bg-[#0B3557] hover:bg-[#0B3557]/90 rounded-2xl"
            style={{ flexGrow: "1" }}
          >
            Search
          </button>
        </div>
      </div>

      <div className="w-full flex items-center max-w-xl  bg-white rounded-xl ">
        <p className="text-sm font-medium text-gray-700 whitespace-nowrap">
          Price Range :{" "}
        </p>

        <div className="w-full flex flex-col items-center max-w-xl p-6 bg-gray-100 rounded-xl flex-1">
          <div className="relative w-full h-6">
            <div className="absolute top-1/2 w-full h-2 bg-gray-300 rounded -translate-y-1/2"></div>

            {/* Highlighted range */}
            <div
              className="absolute top-1/2 h-2 bg-black rounded -translate-y-1/2"
              style={{
                left: `${((minValue - min) / (max - min)) * 100}%`,
                right: `${100 - ((maxValue - min) / (max - min)) * 100}%`,
              }}
            ></div>

            {/* Max slider */}
            <input
              type="range"
              min={min}
              max={max}
              value={maxValue}
              onChange={handleMaxChange}
              className="absolute w-full h-6 appearance-none z-40 bg-transparent pointer-events-auto"
            />
          </div>

          <div className="flex justify-between  w-full px-1 text-sm font-medium text-gray-700">
            <span>${minValue.toLocaleString()}</span>
            <span>${maxValue.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceHero;
