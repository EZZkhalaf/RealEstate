import React, { useState } from "react";
import GrayHeader from "../../Atoms/GrayHeader";
import SixButtonsInputs from "../../Atoms/SixButtonsInputs";
import SubmitButton from "../../Atoms/SubmitButton";

const BedsAndBaths = () => {
  const [selectedBedroom, setSelectedBedroom] = useState(null);
  const [selectedBathroom, setSelectedBathroom] = useState(null);
  const bedrooms = ["Any", 1, 2, 3, 4, 5];

  const bathrooms = ["Any", 1, 1.5, 2, 3, 4];

  return (
    <div className="flex flex-col gap-3  mt-3 fixed bg-white border border-gray-300 rounded-lg  shadow-2xl scroll-auto w-[25vw]">
      <GrayHeader header={"Number of Bedrooms"} />
      <SixButtonsInputs
        title={"Bedrooms"}
        options={bedrooms}
        selected={selectedBedroom}
        setSelected={setSelectedBedroom}
      />
      <div className="flex flex-row gap-1 items-center px-4 ">
        <div className="flex items-center border-2 border-gray-200">
          <input type="checkbox" className=" rounded-lg w-5 h-5" />
        </div>
        <p className="text-lg text-gray-400 ">Use exact match</p>
      </div>

      <GrayHeader header={"Number of Bathrooms"} />
      <SixButtonsInputs
        title={"Bathrooms"}
        options={bathrooms}
        selected={selectedBathroom}
        setSelected={setSelectedBathroom}
      />
      <div className="w-full px-4 mb-2 mt-5">
        <SubmitButton text={"Apply"} />
      </div>
    </div>
  );
};

export default BedsAndBaths;
