import React from "react";
import InsightWithIconAtom from "../../Atoms/InsightWithIconAtom";

const MarketInsightsListing = ({ marketData }) => {
  return (
    <div>
      {marketData.map((m, index) => (
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
