import React from "react";
import TitleAtom from "./Atoms/TitleAtom";
import ParagraphDescription from "./Atoms/ParagraphDescription";
import ViewButtonAtom from "./Atoms/ViewButtonAtom";
import MarketInsightsSummary from "./MainComponents/InvestmentTools/MarketInsightsSummary";
import ROICalculator from "./MainComponents/InvestmentTools/ROICalculator";
import InvestmentSummary from "./MainComponents/InvestmentTools/InvestmentSummary";
import ScrollAnimation from "../Animation/ScrollAnimation";
import GrayLine from "./Atoms/GrayLine";

const InvestmentTools = ({
  title = "Investment Tools",
  description = "Calculate your returns and make informed investment decisions",
  children,
}) => {
  return (
    <div className="grid grid-cols-1  w-full mt-20  lg:px-50 md:px-20 px-5">
      <div className="flex flex-col items-center">
        <TitleAtom title={title} textSizeLarge="3xl" textSizeDefault="3xl" />
        <ParagraphDescription description={description} />
        <GrayLine />
      </div>
      <div className="grid grid-cols-1  lg:grid-cols-2 w-full p-8 px-3 lg:px-20 gap-10">
        <ScrollAnimation>
          <ROICalculator />
        </ScrollAnimation>

        {children}
      </div>
    </div>
  );
};

export default InvestmentTools;
