import React from "react";
import InsightCard from "../../Molecule/InsightCard";
import SummaryElementsInsight from "../../Molecule/SummaryElementsInsight";
import ScrollAnimation from "../../../Animation/ScrollAnimation";

const MarketInsightsSummaryListing = () => {
  const propertyStats = [
    {
      metric: "Avg. Property Value",
      value: "₹2.8M",
      change: "+8.2%",
    },
    {
      metric: "Rental Yield",
      value: "6.5%",
      change: "+0.3%",
    },
    {
      metric: "Market Transactions",
      value: "1,247",
      change: "+15.4%",
    },
    {
      metric: "Days on Market",
      value: "32",
      change: "-5 days",
    },
  ];

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-5 w-full gap-6 ">
      {propertyStats.map((m) => (
        <div className="shadow-xl rounded-lg bg-white">
          <ScrollAnimation>
            <SummaryElementsInsight insight={m} />
          </ScrollAnimation>
        </div>
      ))}
    </div>
  );
};

export default MarketInsightsSummaryListing;
