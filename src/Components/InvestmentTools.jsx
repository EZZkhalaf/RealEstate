import React from "react";
import ROICalculator from "./MainComponents/ROICalculator";
import InvestmentSummary from "./MainComponents/InvestmentSummary";
import TitleAtom from "./Atoms/TitleAtom";
import ParagraphDescription from "./Atoms/ParagraphDescription";
import ViewButtonAtom from "./Atoms/ViewButtonAtom";
import MarketInsightsSummary from "./MainComponents/MarketInsightsSummary";

const InvestmentTools = () => {
  return (
    <div className="flex flex-col items-center mt-20">
      <TitleAtom title={"Investment Tools"} />
      <ParagraphDescription
        description={
          "Calculate your returns and make informed investment decisions"
        }
      />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full p-8 px-20 gap-10">
        <ROICalculator />
        <div className="flex flex-col">
          <InvestmentSummary />
          <MarketInsightsSummary />
          <ViewButtonAtom
            title={"Get Investment Consultation "}
            navigateTo={"idk"}
            color={"#0B3557"}
            hoverColor={"#5A7792"}
            textColor={"#FFFFFF"}
          />
        </div>
      </div>
    </div>
  );
};

export default InvestmentTools;
