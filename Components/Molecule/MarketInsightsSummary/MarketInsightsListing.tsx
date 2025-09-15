import React from "react";
import InsightWithIconAtom from "../../Atoms/InsightWithIconAtom";
import { MarketDataInterface } from "../../MainComponents/InvestmentTools/MarketInsightsSummary";

interface MarketInsightsInterface {
  marketData: MarketDataInterface[];
}

const MarketInsightsListing: React.FC<MarketInsightsInterface> = ({
  marketData,
}) => {
  return (
    <div>
      {marketData.map((m: MarketDataInterface, index: number) => (
        <div key={index} className="mt-3">
          <InsightWithIconAtom
            key={index}
            name={m.name}
            icon={m.icon}
            value={m.value}
          />
        </div>
      ))}
    </div>
  );
};

export default MarketInsightsListing;
