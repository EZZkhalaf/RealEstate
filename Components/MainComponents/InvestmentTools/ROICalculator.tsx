//this willl be client side in the future because there will be interacting with the browser etc..
"use client";
import React, { useEffect } from "react";
import InputNumberAtom from "../../Atoms/InputNumberAtom";
import TitleAtom from "../../Atoms/TitleAtom";
import IconAtom from "../../Atoms/IconAtom";
import ListSelect from "../../Atoms/ListSelect";
import { ROICalculatorInterface } from "@/Interface/InvestInterface";

const ROICalculator: React.FC<ROICalculatorInterface> = ({
  propertyValue = 12000,
  setPropertyValue,
  monthlyRent = 800,
  setMonthlyRent,
  loanAmount = 100000,
  setLoanAmount,
  intrestRate = 3.5,
  setIntrestRate,
  loanTerms = 3,
  setLoanTerms,
}) => {
  const list: number[] = [15, 20, 25, 30];

  return (
    <div className="shadow-2xl w-full p-2 lg:p-10">
      <div className="flex gap-1 flex-row">
        <IconAtom icon={"calculator"} />
        <TitleAtom title={"ROI Calculator"} />
      </div>
      <InputNumberAtom
        title={"Property Value"}
        value={propertyValue}
        setValue={setPropertyValue}
      />
      <InputNumberAtom
        title={"Monthly Rent"}
        value={monthlyRent}
        setValue={setMonthlyRent}
      />
      <InputNumberAtom
        title={"Loan Amount"}
        value={loanAmount}
        setValue={setLoanAmount}
      />
      <InputNumberAtom
        title={"Interest Rate (%)"}
        value={intrestRate}
        setValue={setIntrestRate}
      />

      <ListSelect
        title="Loan Term (years)"
        list={list}
        width="w-full"
        value={loanTerms}
        onChange={setLoanTerms}
      />
    </div>
  );
};

export default ROICalculator;
