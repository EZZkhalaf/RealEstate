import React from "react";

const PriceRangeHero = ({ minValue, maxValue, min, max, handleMaxChange }) => {
  return (
    <div className="w-full flex items-center max-w-xl  bg-white rounded-xl ">
      <p className="text-sm font-medium text-gray-700 whitespace-nowrap">
        Price Range :{" "}
      </p>

      <div className="w-full flex flex-col items-center max-w-xl p-6 bg-gray-100 rounded-xl flex-1">
        <div className="relative w-full h-6">
          <div className="absolute top-1/2 w-full h-2 bg-gray-300 rounded -translate-y-1/2"></div>

          <div
            className="absolute top-1/2 h-2 bg-black  -translate-y-1/2 rounded-full"
            style={{
              left: `${((minValue - min) / (max - min)) * 100}%`,
              right: `${100 - ((maxValue - min) / (max - min)) * 100}%`,
            }}
          ></div>

          <input
            type="range"
            min={min}
            max={max}
            value={maxValue}
            onChange={handleMaxChange}
            className="relative w-full h-6 appearance-none z-40 bg-transparent pointer-events-auto rounded-full"
          />
        </div>

        <div className="flex justify-between  w-full px-1 text-sm font-medium text-gray-700">
          <span>${minValue.toLocaleString()}</span>
          <span>${maxValue.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

export default PriceRangeHero;
