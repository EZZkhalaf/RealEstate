"use client";
import React from "react";
import TitleAtom from "../../../Components/Atoms/TitleAtom";
import ParagraphDescription from "../../../Components/Atoms/ParagraphDescription";
import GrayLine from "../../../Components/Atoms/GrayLine";
import { OppurtunitiesListing } from "@/Components/MainComponents/InvestmentOpportunities/OpportunitiesListing";

const InvestmentOpportunities: React.FC<{ investmentOpData: any }> = ({
  investmentOpData,
}) => {
  const investmentOptions: any = investmentOpData;
  return (
    <div className="flex flex-col w-full max-w-7xl ">
      <div className="flex flex-col items-center w-full mt-5 ">
        <TitleAtom title={"Investment Opportunities"} />
        <ParagraphDescription
          description={
            "Choose from various investment types that match your risk profile and return expectations"
          }
        />
        <GrayLine />
      </div>
      <OppurtunitiesListing opportunities={investmentOptions} />
    </div>
  );
};

export default InvestmentOpportunities;
