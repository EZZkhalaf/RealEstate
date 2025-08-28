import TitleAtom from "../../Atoms/TitleAtom";

import MarketInsightsListing from "../../Molecule/MarketInsightsSummary/MarketInsightsListing";
import BestPerformingAreasListing from "../../Molecule/MarketInsightsSummary/BestPerformingAreasListing";

const MarketInsightsSummary = () => {
  const marketData = [
    {
      icon: "trending-up",
      name: "property",
      value: 8.2,
    },
    {
      icon: "chart-bar",
      name: "rental yeild",
      value: 6.5,
    },
  ];
  const bestAreas = ["KAFD ", " Olaya "];
  return (
    <div className="flex flex-col px-1 lg:px-3 py-9 shadow-2xl rounded-lg mt-4">
      <TitleAtom title={"Market Insights"} />

      <MarketInsightsListing marketData={marketData} />

      <BestPerformingAreasListing bestAreas={bestAreas} />
    </div>
  );
};

export default MarketInsightsSummary;
