import React from "react";
import TitleAtom from "../../Atoms/TitleAtom";
import InvestmentSummaryListing from "../../Molecule/InvestmentSummary/InvestmentSummaryListing";

export interface SummaryInterface {
  name: string;
  sum: string;
}

const InvestmentSummary = () => {
  const summary: SummaryInterface[] = [
    {
      name: "Monthly Payment",
      sum: "$4,490",
    },
    {
      name: "Annual Rent",
      sum: "$96,000",
    },
    {
      name: "ROI",
      sum: "2.81%",
    },
  ];
  return (
    <div className="flex flex-col w-full shadow-2xl p-2 lg:p-8">
      <TitleAtom title={"Investment Summary"} />
      <InvestmentSummaryListing summary={summary} />
    </div>
  );
};

export default InvestmentSummary;
