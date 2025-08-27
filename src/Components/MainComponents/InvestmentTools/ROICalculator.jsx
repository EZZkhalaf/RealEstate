import React from "react";
import InputNumberAtom from "../../Atoms/InputNumberAtom";
import TitleAtom from "../../Atoms/TitleAtom";
import IconAtom from "../../Atoms/IconAtom";

const ROICalculator = () => {
  return (
    <div className="shadow-2xl w-full p-10">
      <div className="flex gap-1 flex-row">
        <IconAtom icon={"calculator"} />
        <TitleAtom title={"ROI Calculator"} />
      </div>
      <InputNumberAtom title={"Property Value"} value={150000} />
      <InputNumberAtom title={"Monthly Rent"} value={8000} />
      <InputNumberAtom title={"Loan Amount"} value={100000} />
      <InputNumberAtom title={"Interest Rate (%)"} value={3.5} />
      <p>Loan Term (years)</p>
      <select className="bg-gray-300 w-full mt-2">
        <option>15 years</option>
        <option>20 years</option>
        <option>25 years</option>
        <option>30 years</option>
      </select>
    </div>
  );
};

export default ROICalculator;
