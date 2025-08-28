import React from "react";
import HeroSummaryListing from "../../Molecule/HeroSummary/HeroSummaryListing";

const HeroSummary = ({ summary }) => {
  return (
    <div className="w-full flex flex-row gap-2 lg:gap-6 items-center justify-around">
      <HeroSummaryListing summary={summary} />
    </div>
  );
};

export default HeroSummary;
