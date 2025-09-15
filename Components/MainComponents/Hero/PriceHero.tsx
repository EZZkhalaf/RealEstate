import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import InputGray from "../../Atoms/InputGray";
import HeroButtonsListing from "../../Molecule/PriceHero/HeroButtonsListing";
import PriceRangeHero from "../../Molecule/PriceHero/PriceRangeHero";
import ButtonCustomize from "../../Atoms/ButtonCustomize";

interface PriceHeroCustomInputInterface {
  type: string;
  placeholder: string;
}

const PriceHeroCustomInput: React.FC<PriceHeroCustomInputInterface> = ({
  type,
  placeholder,
}) => {
  return (
    <div className="flex flex-row items-center bg-gray-200 p-3 gap-3 rounded-xl flex-grow ">
      <FaSearch />
      <InputGray type={type} placeholder={placeholder} />
    </div>
  );
};

const PriceHero = () => {
  const [selected, setSelected] = useState(null);
  const min: number = 100000;
  const max: number = 10000000;

  const [minValue, setMinValue] = useState<number>(100000);
  const [maxValue, setMaxValue] = useState<number>(10000000);

  const handleMaxChange = (e: any) => {
    const value = Math.max(Number(e.target.value), minValue + 100000);
    setMaxValue(value);
  };

  const buttons: string[] = ["Buy", "Sell", "Invest"];
  return (
    <div className="flex flex-col items-center bg-white shadow-2xl py-5 gap-6 w-full   px-1 rounded-2xl  ">
      <HeroButtonsListing
        buttons={buttons}
        setSelected={setSelected}
        selected={selected}
      />

      <div className="lg:flex md:flex grid grid-cols-1 gap-4 w-full px-4">
        <PriceHeroCustomInput
          type={"text"}
          placeholder={"Enter location, property type, or keyword..."}
        />
        <div className="flex items-center" style={{ flexGrow: 0.3 }}>
          <ButtonCustomize
            text="Search"
            color="#0B3557"
            hoverColor="#0B3557E6"
            textColor="#FFFFFF"
            hoverTextColor="#FFFFFF"
            rounded="xl"
            padding="1"
          />
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
