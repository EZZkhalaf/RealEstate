"use client";
import TitleAtom from "./Atoms/TitleAtom";
import ParagraphDescription from "./Atoms/ParagraphDescription";
import InsightsListing from "./MainComponents/MarketInsights.jsx/InsightsListing";
import MarketInsightsSummaryListing, {
  PropertyStatusInterface,
} from "./MainComponents/MarketInsights.jsx/MarketInsightsSummaryListing";
import ScrollAnimation from "../Animation/ScrollAnimation";
import GrayLine from "./Atoms/GrayLine";
import { useEffect, useState } from "react";
import { getStaticMarketReports } from "@/API/InvestmentApi";

export interface MarketReportInterface {
  type: string;
  growth: string;
  title: string;
  description: string;
  date: string;
  linkText: string;
}

const MarketInsights: React.FC<{
  marketInsightsData: MarketReportInterface[];
  marketInsightSummaryListingData: PropertyStatusInterface[];
}> = ({ marketInsightsData, marketInsightSummaryListingData }) => {
  const marketReports: MarketReportInterface[] = marketInsightsData;

  return (
    <div className="flex flex-col items-center w-full mt-20 max-w-7xl">
      <ScrollAnimation>
        <TitleAtom title={"Market Insights"} />
      </ScrollAnimation>

      <ScrollAnimation>
        <ParagraphDescription
          description={
            "Stay informed with the latest real estate trends and market analysis"
          }
        />
        <GrayLine />
      </ScrollAnimation>

      <ScrollAnimation>
        <InsightsListing insights={marketReports} />
      </ScrollAnimation>
      <MarketInsightsSummaryListing
        marketInsightSummaryListingData={marketInsightSummaryListingData}
      />
    </div>
  );
};

export default MarketInsights;
