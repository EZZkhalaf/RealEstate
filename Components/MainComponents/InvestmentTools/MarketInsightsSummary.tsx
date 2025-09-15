import TitleAtom from "../../Atoms/TitleAtom";
import MarketInsightsListing from "../../Molecule/MarketInsightsSummary/MarketInsightsListing";
import BestPerformingAreasListing from "../../Molecule/MarketInsightsSummary/BestPerformingAreasListing";

export interface MarketDataInterface {
  icon: string;
  name: string;
  value: number;
}

const MarketInsightsSummary = () => {
  const marketData: MarketDataInterface[] = [
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
  const bestAreas: string[] = ["KAFD ", " Olaya "];

  return (
    <div className="flex flex-col   p-2 lg:p-8 shadow-2xl rounded-lg mt-4">
      <TitleAtom title={"Market Insights"} />

      <MarketInsightsListing marketData={marketData} />

      <BestPerformingAreasListing bestAreas={bestAreas} />
    </div>
  );
};

export default MarketInsightsSummary;
