import React from "react";
import InputNumberAtom from "../../Atoms/InputNumberAtom";
import TitleAtom from "../../Atoms/TitleAtom";
import IconAtom from "../../Atoms/IconAtom";
import ListSelect from "../../Atoms/ListSelect";

const ROICalculator = () => {
  const list: string[] = ["15 years", "20 years", "25 years", "30 years"];
  return (
    <div className="shadow-2xl w-full p-2 lg:p-10">
      <div className="flex gap-1 flex-row">
        <IconAtom icon={"calculator"} />
        <TitleAtom title={"ROI Calculator"} />
      </div>
      <InputNumberAtom title={"Property Value"} value={150000} />
      <InputNumberAtom title={"Monthly Rent"} value={8000} />
      <InputNumberAtom title={"Loan Amount"} value={100000} />
      <InputNumberAtom title={"Interest Rate (%)"} value={3.5} />

      <ListSelect title="Loan Term (years)" list={list} width="w-full" />
    </div>
  );
};

export default ROICalculator;
