import React, { useState } from "react";
import GrayLine from "../../Atoms/GrayLine";
import ParagraphDescription from "../../Atoms/ParagraphDescription";
import TitleAtom from "../../Atoms/TitleAtom";
import MarketCard from "../../Molecule/MarketAnalysis/MarketCard";
import KeyMarketInsight from "../../Molecule/MarketAnalysis/KeyMarketInsight";
import MockMarkets from "../../../MockData/MockMarkets.json";
const MarketAnalysis = () => {
  const [markets, setMarkets] = useState(MockMarkets);

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
