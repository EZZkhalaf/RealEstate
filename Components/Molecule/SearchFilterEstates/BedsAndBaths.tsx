import React, { useState } from "react";
import GrayHeader from "../../Atoms/GrayHeader";
import SixButtonsInputs from "../../Atoms/SixButtonsInputs";
import SubmitButton from "../../Atoms/SubmitButton";
import SingleCheckBox from "../../Atoms/SingleCheckBox";

interface BedsAndBathsInterface {
  value: {
    beds?: number;
    baths?: number;
    exactMatch?: boolean;
  };
  onChange: (value: {
    beds?: number;
    baths?: number;
    exactMatch?: boolean;
  }) => void;
}

const BedsAndBaths: React.FC<BedsAndBathsInterface> = ({ value, onChange }) => {
  const bedrooms: number[] = [1, 2, 3, 4, 5];

  const bathrooms: number[] = [1, 1.5, 2, 3, 4];

  return (
    <div className="flex flex-col gap-3  mt-3 fixed bg-white border border-gray-300 rounded-lg  shadow-2xl scroll-auto w-[400px] max-h-[70vh] overflow-y-auto">
      <GrayHeader header={"Number of Bedrooms"} />
      <SixButtonsInputs
        title={"Bedrooms"}
        options={bedrooms}
        selected={value?.beds || null}
        setSelected={(beds: any) => onChange({ ...value, beds })}
      />
      {/* <div className="flex flex-row gap-1 items-center px-4 ">
        <div className="flex items-center border-2 border-gray-200">
          <input type="checkbox" className=" rounded-lg w-5 h-5" />
        </div>
        <p className="text-lg text-gray-400 ">Use exact match</p>
      </div> */}

      <SingleCheckBox
        text={"Use exact match"}
        checked={value?.exactMatch || false}
        onChange={(checked) => onChange({ ...value, exactMatch: checked })}
      />
      <GrayHeader header={"Number of Bathrooms"} />
      <SixButtonsInputs
        title={"Bathrooms"}
        options={bathrooms}
        selected={value?.baths || null}
        setSelected={(baths: any) => onChange({ ...value, baths })}
      />
      <div className="w-full px-4 mb-2 mt-5">
        <SubmitButton text={"Apply"} />
      </div>
    </div>
  );
};

export default BedsAndBaths;
