import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import InputGray from "../../Atoms/InputGray";
import HeroButtonsListing from "../../Molecule/PriceHero/HeroButtonsListing";
import PriceRangeHero from "../../Molecule/PriceHero/PriceRangeHero";

const PriceHero = () => {
  const [selected, setSelected] = useState(null);
  const min = 100000;
  const max = 10000000;

  const [minValue, setMinValue] = useState(100000);
  const [maxValue, setMaxValue] = useState(10000000);

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minValue + 100000);
    setMaxValue(value);
  };

  const buttons = ["Buy", "Sell", "Invest"];
  return (
    <div className="flex flex-col items-center bg-white shadow-2xl py-5 gap-6 w-full  px-1 rounded-2xl  ">
      <HeroButtonsListing
        buttons={buttons}
        setSelected={setSelected}
        selected={selected}
      />

      <div className="flex gap-4 w-full px-4">
        <div className="flex flex-row items-center bg-gray-300 p-3 gap-3 rounded-xl flex-grow ">
          <FaSearch />
          <InputGray
            type={"text"}
            placeholder={" Enter location, property type, or keyword..."}
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

      <PriceRangeHero
        minValue={minValue}
        maxValue={maxValue}
        min={min}
        max={max}
        handleMaxChange={handleMaxChange}
      />
    </div>
  );
};

export default PriceHero;
