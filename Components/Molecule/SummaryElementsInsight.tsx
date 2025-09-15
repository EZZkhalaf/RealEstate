import React from "react";
import { PropertyStatusInterface } from "../MainComponents/MarketInsights.jsx/MarketInsightsSummaryListing";

interface SummaryElementsInsightInterface {
  insight: PropertyStatusInterface;
}
const SummaryElementsInsight: React.FC<SummaryElementsInsightInterface> = ({
  insight,
}) => {
  return (
    <div className="bg-white shadow-lg p-6 rounded-lg flex flex-col text-center gap-2">
      <h1 className="text-xl font-bold text-[#0B3557] mb-1">{insight.value}</h1>
      <p className="text-sm text-gray-600 mb-1">{insight.metric}</p>
      <p className="text-xs text-green-600 font-medium">{insight.change}</p>
    </div>
  );
};

export default SummaryElementsInsight;

// metric: "Days on Market",
//     value: "32",
//     change: "-5 days"
