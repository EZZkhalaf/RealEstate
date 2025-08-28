import React from "react";
import TitleAtom from "./Atoms/TitleAtom";
import ParagraphDescription from "./Atoms/ParagraphDescription";
import ViewButtonAtom from "./Atoms/ViewButtonAtom";
import MarketInsightsSummary from "./MainComponents/InvestmentTools/MarketInsightsSummary";
import ROICalculator from "./MainComponents/InvestmentTools/ROICalculator";
import InvestmentSummary from "./MainComponents/InvestmentTools/InvestmentSummary";
import ScrollAnimation from "../Animation/ScrollAnimation";

const InvestmentTools = () => {
  return (
    <div className="grid grid-cols-1  w-full mt-20 p-3">
      <div className="flex flex-col items-center">
        <TitleAtom title={"Investment Tools"} />
        <ParagraphDescription
          description={
            "Calculate your returns and make informed investment decisions"
          }
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full p-8 px-3 lg:px-20 gap-10">
        <ScrollAnimation>
          <ROICalculator />
        </ScrollAnimation>
        <div className="grid grid-cols-1">
          <ScrollAnimation>
            <InvestmentSummary />
          </ScrollAnimation>
          <ScrollAnimation>
            <MarketInsightsSummary />
          </ScrollAnimation>
          <ScrollAnimation>
            <ViewButtonAtom
              title={"Get Investment Consultation "}
              navigateTo={"idk"}
              color={"#0B3557"}
              hoverColor={"#5A7792"}
              textColor={"#FFFFFF"}
            />
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
};

export default InvestmentTools;
