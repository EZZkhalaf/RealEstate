import React from "react";
import GrayLine from "../../Atoms/GrayLine";
import ParagraphDescription from "../../Atoms/ParagraphDescription";
import TitleAtom from "../../Atoms/TitleAtom";
import MarketCard from "../../Molecule/MarketAnalysis/MarketCard";
import KeyMarketInsight from "../../Molecule/MarketAnalysis/KeyMarketInsight";

const MarketAnalysis = () => {
  const markets = [
    {
      name: "Riyadh - KAFD",
      description: "Strong growth expected",
      appreciation: "+12.8%",
      rentalYield: "7.2%",
      avgPrice: "₹3.2M",
    },
    {
      name: "Jeddah - Corniche",
      description: "Steady appreciation",
      appreciation: "+8.5%",
      rentalYield: "6.8%",
      avgPrice: "₹2.8M",
    },
    {
      name: "Riyadh - Al Olaya",
      description: "High demand area",
      appreciation: "+10.2%",
      rentalYield: "6.5%",
      avgPrice: "₹2.5M",
    },
    {
      name: "Dammam - Business District",
      description: "Emerging market",
      appreciation: "+6.3%",
      rentalYield: "8.1%",
      avgPrice: "₹2.1M",
    },
  ];

  return (
    <div className="grid grid-cols-1  w-full mt-20  lg:px-30 md:px-10 px-5 mb-10">
      <div className="flex flex-col items-center">
        <TitleAtom title={"Market Analysis"} />
        <ParagraphDescription
          description={
            "Real-time market insights to help you make informed investment decisions"
          }
        />
        <GrayLine />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2  gap-4">
        {markets.map((market, index) => (
          <MarketCard market={market} key={index} />
        ))}
      </div>

      <KeyMarketInsight />
    </div>
  );
};

export default MarketAnalysis;
