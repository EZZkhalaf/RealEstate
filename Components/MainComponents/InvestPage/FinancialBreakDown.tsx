import React from "react";
import IconWithText from "../../Atoms/IconWithText";
import TitleAtom from "../../Atoms/TitleAtom";
import GrayLine from "../../Atoms/GrayLine";

const FinancialBreakDown = () => {
  return (
    <div className="flex flex-col gap-2 rounded-lg shadow-2xl py-3 px-6">
      <IconWithText
        icon={"finance"}
        text={"Financial Breakdown"}
        textColor="text-gray-500 text-lg"
      />
      <div className="flex flex-col gap-2 mt-3">
        <div className="flex justify-between  border-b border-gray-200">
          <p className="text-gray-700 text-sm">Gross Annual Rent</p>
          <p className="font-semibold text-sm ">₹270,000</p>
        </div>
        <div className="flex justify-between border-b border-gray-200">
          <p className="text-gray-700 text-sm">Total Expensest</p>
          <p className="font-semibold text-red-700 text-sm">₹270,000</p>
        </div>
        <div className="flex justify-between border-b border-gray-200">
          <p className="text-gray-700 text-sm">Total Expenses</p>
          <p className="font-semibold text-red-700 text-sm">₹270,000</p>
        </div>
        <GrayLine />
        <div className="flex justify-between ">
          <p className="font-bold text-md">Net Cash Flow</p>
          <p className="font-semibold text-red-900 text-md">₹270,000</p>
        </div>
      </div>
    </div>
  );
};

export default FinancialBreakDown;
