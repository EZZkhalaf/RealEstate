import React from "react";
import FeatureElement from "../Atoms/FeatureElement";
import TitleAtom from "../Atoms/TitleAtom";
import ParagraphDescription from "../Atoms/ParagraphDescription";
import ViewButtonAtom from "../Atoms/ViewButtonAtom";

const InsightCard = ({ insight }) => {
  return (
    <div className="flex flex-col gap-2 items-center shadow-2xl rounded-lg">
      <div className="flex justify-between w-full px-5 ">
        <FeatureElement text={insight.type} />
        <p className="text-green-600 font-semibold">{insight.growth}</p>
      </div>
      <div>
        <h1 className="text-xl font-semibold ">{insight.title}</h1>
      </div>

      <div className="text-xs">
        <ParagraphDescription description={insight.description} />
      </div>

      <div className="flex items-center justify-between w-full py-3  text-xs px-5">
        <p className="text-xs text-gray-500 ">{insight.date}</p>
        <ViewButtonAtom
          title={"View All Agents"}
          navigateTo={"any url"}
          color={"#FFFFFF"}
          hoverColor={"#0B3557"}
          textColor={"#0B3557"}
          hoverTextColor={"#FFFFFF"}
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
