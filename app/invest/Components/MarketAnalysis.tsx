"use client";
import React from "react";
import GrayLine from "../../../Components/Atoms/GrayLine";
import ParagraphDescription from "../../../Components/Atoms/ParagraphDescription";
import TitleAtom from "../../../Components/Atoms/TitleAtom";
import MarketCard from "../../../Components/Molecule/MarketAnalysis/MarketCard";
import KeyMarketInsight from "../../../Components/Molecule/MarketAnalysis/KeyMarketInsight";
export interface MarketInterface {
  name: string;
  description: string;
  appreciation: string;
  rentalYield: string;
  avgPrice: string;
}
const MarketAnalysis: React.FC<{ markets: MarketInterface[] }> = ({
  markets,
}) => {
  return (
    <div className="grid grid-cols-1  w-full mt-20  max-w-7xl mb-10">
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
        {markets?.map((market, index: number) => (
          <MarketCard market={market} key={index} />
        ))}
      </div>

      <KeyMarketInsight />
    </div>
  );
};

export default MarketAnalysis;
