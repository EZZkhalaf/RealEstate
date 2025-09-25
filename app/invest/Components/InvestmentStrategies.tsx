"use client";
import React, { useEffect, useState } from "react";
import TitleAtom from "../../../Components/Atoms/TitleAtom";
import ParagraphDescription from "../../../Components/Atoms/ParagraphDescription";
import GrayLine from "../../../Components/Atoms/GrayLine";
import StrategyCard, {
  StrategyInterface,
} from "../../../Components/Molecule/InvestmentStrategies/StrategyCard";
import getStaticInvestmentStrategies from "@/API/InvestmentApi";

const InvestmentStrategies: React.FC<{
  investmentStrategies: StrategyInterface[];
}> = ({ investmentStrategies }) => {
  return (
    <div className="grid grid-cols-1  w-full mt-20  max-w-7xl">
      <div className="flex flex-col items-center">
        <TitleAtom title={"Investment Strategies"} />
        <ParagraphDescription
          description={
            "Choose the right investment approach based on your goals, timeline, and risk tolerance"
          }
        />
        <GrayLine />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4">
        {investmentStrategies?.map((strategy, index) => (
          <StrategyCard strategy={strategy} key={index} />
        ))}
      </div>
    </div>
  );
};

export default InvestmentStrategies;
