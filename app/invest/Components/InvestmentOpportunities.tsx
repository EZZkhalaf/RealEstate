"use client";
import React, { useEffect, useState } from "react";
import TitleAtom from "../../../Components/Atoms/TitleAtom";
import ParagraphDescription from "../../../Components/Atoms/ParagraphDescription";
import GrayLine from "../../../Components/Atoms/GrayLine";
import IconAtom from "../../../Components/Atoms/IconAtom";
import { Icon } from "@iconify/react";
import ViewButtonAtom from "../../../Components/Atoms/ViewButtonAtom";
import { getStaticEstates } from "@/API/EstatesApi";
import { getStaticInvestmentOption } from "@/API/InvestmentOptionsApi";
import {
  OpCardInterface,
  OppurtunitiesListingInterface,
} from "@/Interface/InvestInterface";
import { OppurtunitiesListing } from "@/Components/MainComponents/InvestmentOpportunities/OpportunitiesListing";

const InvestmentOpportunities: React.FC<{ investmentOpData: any }> = ({
  investmentOpData,
}) => {
  const investmentOptions: any = investmentOpData;

  // const fetchOptions = async () => {
  //   const options = await getStaticInvestmentOption();
  //   setInvestmentOptions(options);
  // };
  // useEffect(() => {
  //   fetchOptions();
  // }, []);

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
