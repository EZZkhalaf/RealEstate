import React, { useEffect, useState } from "react";
import GrayLine from "../../../Components/Atoms/GrayLine";
import ParagraphDescription from "../../../Components/Atoms/ParagraphDescription";
import TitleAtom from "../../../Components/Atoms/TitleAtom";
import MarketCard from "../../../Components/Molecule/MarketAnalysis/MarketCard";
import KeyMarketInsight from "../../../Components/Molecule/MarketAnalysis/KeyMarketInsight";
import { getStaticMarketAnalysis } from "@/API/InvestmentApi";
export interface MarketInterface {
  name: string;
  description: string;
  appreciation: string;
  rentalYield: string;
  avgPrice: string;
}
const MarketAnalysis = () => {
  // const markets: MarketInterface[] = await getStaticMarketAnalysis();
  const [markets, setMarkets] = useState<MarketInterface[]>([]);
  const fetchMarkets = async () => {
    const response = await getStaticMarketAnalysis();
    setMarkets(response);
  };
  useEffect(() => {
    fetchMarkets();
  }, []);
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
        {markets?.map((market, index: number) => (
          <MarketCard market={market} key={index} />
        ))}
      </div>

      <KeyMarketInsight />
    </div>
  );
};

export default MarketAnalysis;
