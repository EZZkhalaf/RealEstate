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
  bedsAndBaths: {
    beds: number[];
    baths: number[];
  };
}

const BedsAndBaths: React.FC<BedsAndBathsInterface> = ({
  value,
  onChange,
  bedsAndBaths,
}) => {
  return (
    <div className="flex flex-col gap-3  mt-3 fixed bg-white border border-gray-300 rounded-lg  shadow-2xl scroll-auto w-[350px] max-h-[70vh] overflow-y-auto ">
      <GrayHeader header={"Number of Bedrooms"} />
      <SixButtonsInputs
        title={"Bedrooms"}
        options={bedsAndBaths.beds || []}
        selected={value?.beds || null}
        setSelected={(beds: any) => onChange({ ...value, beds })}
      />

      <SingleCheckBox
        text={"Use exact match"}
        checked={value?.exactMatch || false}
        onChange={(checked) => onChange({ ...value, exactMatch: checked })}
      />
      <GrayHeader header={"Number of Bathrooms"} />
      <SixButtonsInputs
        title={"Bathrooms"}
        options={bedsAndBaths.baths || []}
        selected={value?.baths || null}
        setSelected={(baths: any) => onChange({ ...value, baths })}
      />
    </div>
  );
};

export default BedsAndBaths;
