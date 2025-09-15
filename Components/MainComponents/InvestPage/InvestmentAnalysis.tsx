import React from "react";
import IconWithText from "../../Atoms/IconWithText";

const InvestmentAnalysis = () => {
  return (
    <div className="flex flex-col gap-2 shadow-2xl py-3 px-6">
      <IconWithText
        icon={"chart-line"}
        text={"Investment Analysis"}
        textColor="text-gray-500 text-lg"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-2 ">
        <div className="bg-[#0B3557] px-14 py-4 flex flex-col items-center gap-2 rounded-lg">
          <p className="text-white font-semibold text-xl ">-17.8%</p>
          <p className="text-white text-xs">Cash-on-Cash Return</p>
        </div>

        <div className="bg-green-500 px-14 py-4 flex flex-col items-center gap-2 rounded-lg">
          <p className="text-white font-semibold text-xl ">0.2%</p>
          <p className="text-white text-xs ">Cap Rate</p>
        </div>

        <div className="bg-blue-500 px-14 py-4 flex flex-col items-center gap-2 rounded-lg">
          <p className="text-white font-semibold text-xl ">₹-216,881</p>
          <p className="text-white text-xs">Annual Cash Flow</p>
        </div>

        <div className="bg-purple-500 px-14 py-4 flex flex-col items-center gap-2 rounded-lg">
          <p className="text-white font-semibold text-xl ">₹8,400</p>
          <p className="text-white text-xs ">Net Operating Income</p>
        </div>
      </div>
    </div>
  );
};

export default InvestmentAnalysis;
