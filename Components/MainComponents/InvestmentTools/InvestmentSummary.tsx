import React from "react";
import TitleAtom from "../../Atoms/TitleAtom";
import InvestmentSummaryListing from "../../Molecule/InvestmentSummary/InvestmentSummaryListing";

interface InvestmentSummaryProps {
  monthlyPayment: number;
  annualRent: number;
  ROI: number;
}

const InvestmentSummary: React.FC<InvestmentSummaryProps> = ({
  monthlyPayment,
  annualRent,
  ROI,
}) => {
  const summary = [
    {
      name: "Monthly Payment",
      sum: `$${monthlyPayment.toLocaleString()}`,
    },
    {
      name: "Annual Rent",
      sum: `$${annualRent.toLocaleString()}`,
    },
    {
      name: "ROI",
      sum: `${ROI.toFixed(2)}%`,
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
