"use client";
import React, { useEffect, useState } from "react";
import HeroSummaryListing from "../../Molecule/HeroSummary/HeroSummaryListing";
import { getStaticHomePageHero } from "@/API/HeroApi";
import { SummaryInterface } from "../InvestmentTools/InvestmentSummary";

export interface HeroSummaryInterface {
  summary?: SummaryInterface[];
}

const HeroSummary: React.FC<HeroSummaryInterface> = ({ summary }) => {
  return (
    <div className="w-full flex flex-row gap-10 lg:gap-6 items-center justify-between">
      <HeroSummaryListing summary={summary} />
    </div>
  );
};

export default HeroSummary;
