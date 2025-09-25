import React from "react";
import FeatureElement from "../Atoms/FeatureElement";
import TitleAtom from "../Atoms/TitleAtom";
import ParagraphDescription from "../Atoms/ParagraphDescription";
import ViewButtonAtom from "../Atoms/ViewButtonAtom";
import { MarketReportInterface } from "../MarketInsights";

interface InsightCardInterface {
  insight: MarketReportInterface;
}

const InsightCard: React.FC<InsightCardInterface> = ({ insight }) => {
  return (
    <div className="flex flex-col gap-2 items-start shadow-2xl bg-white rounded-lg p-6">
      <div className="flex justify-between items-center w-full  ">
        <FeatureElement text={insight.type} />
        <p className="text-green-600 font-md">{insight.growth}</p>
      </div>
      <div>
        <h1 className="text-lg font-semibold  ">{insight.title}</h1>
      </div>

      <div className="text-xs ">
        <ParagraphDescription description={insight.description} />
      </div>

      <div className="flex items-center justify-between w-full py-3  text-xs ">
        <p className="text-xs text-gray-500 ">{insight.date}</p>
        <ViewButtonAtom
          title={"Read More"}
          color={"#FFFFFF"}
          hoverColor={"#0B3557"}
          textColor={"#0B3557"}
          hoverTextColor={"#FFFFFF"}
          border="border-none"
        />
      </div>
    </div>
  );
};

export default InsightCard;

// type: "Investment Guide",
//       growth: "+7.5%",
//       title: "Investment Opportunities in Jeddah Waterfront",
//       description:
//         "New waterfront developments offer promising ROI potential with 7-9% annual returns.",
//       date: "Dec 10, 2024",
//       linkText: "Read More",
