import React from "react";
import TitleAtom from "../Atoms/TitleAtom";
import InsightWithIconAtom from "../Atoms/InsightWithIconAtom";
import { Icon } from "@iconify/react";

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
    <div className="flex flex-col px-3 py-9 shadow-2xl rounded-lg mt-4">
      <TitleAtom title={"Market Insights"} />
      {marketData.map((m) => (
        <div className="mt-3">
          <InsightWithIconAtom name={m.name} icon={m.icon} value={m.value} />
        </div>
      ))}
      {}
      <div className="flex flex-row items-center px-2 mt-3 gap-1 text-sm">
        <Icon icon={`mdi:chart-pie`} height="25" width="25" />
        <p className="flex flex-row items-center">
          Best performing areas : {bestAreas.join(", ")}
        </p>
      </div>
    </div>
  );
};

export default MarketInsightsSummary;
