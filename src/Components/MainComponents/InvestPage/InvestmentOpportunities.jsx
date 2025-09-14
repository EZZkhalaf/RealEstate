import React, { useState } from "react";
import TitleAtom from "../../Atoms/TitleAtom";
import ParagraphDescription from "../../Atoms/ParagraphDescription";
import GrayLine from "../../Atoms/GrayLine";
import IconAtom from "../../Atoms/IconAtom";
import { Icon } from "@iconify/react";
import ViewButtonAtom from "../../Atoms/ViewButtonAtom";
import MockEstates from "../../../MockData/MockEstates.json";
import MockInvestmentOptions from "../../../MockData/MockInvestmentOptions.json";
const OpCard = ({ op }) => {
  return (
    <div className="flex flex-col gap-3 w-full justify-center shadow-2xl p-3 rounded-lg">
      <div className="flex gap-2 lg:flex-row md:flex-row flex-col items-center ">
        <IconAtom icon={op.icon} />
        <div className="flex flex-col ">
          <TitleAtom title={op.title} textSizeDefault="xl" textSizeLarge="xl" />
          <ParagraphDescription
            textAlignment="text-start"
            description={op.desc}
            margin={false}
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between px-2 gap-4 mt-5">
        {/* Avg ROI */}
        <div className="flex flex-row sm:flex-col items-center  t gap-1">
          <p className="font-semibold">{op.avgROI}</p>
          <p className="text-xs">Avg. ROI</p>
        </div>

        {/* Min Investment */}
        <div className="flex flex-row sm:flex-col items-center   gap-1">
          <p className="font-semibold">{op.minInvestment}</p>
          <p className="text-xs">Min. Investment</p>
        </div>

        {/* Risk Level */}
        <div className="flex flex-row sm:flex-col items-center  gap-1">
          <p
            className={`font-semibold  px-2 flex items-center text-xs rounded-xl w-fit
        ${op.riskLevel === "Low" ? "bg-green-200 text-green-600" : ""}
        ${op.riskLevel === "Medium" ? "bg-yellow-200 text-yellow-600" : ""}
        ${op.riskLevel === "Medium-High" ? "bg-orange-200 text-orange-600" : ""}
        ${op.riskLevel === "High" ? "bg-red-200 text-red-600" : ""}
      `}
          >
            {op.riskLevel}
          </p>
          <p className="text-xs">Risk Level</p>
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-2 text-xs text-gray-700">
        {op.highlights.map((point, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <Icon
              icon="mdi-light:check"
              className="text-green-500"
              width={18}
              height={18}
            />
            <span>{point}</span>
          </div>
        ))}
      </div>
      <ViewButtonAtom
        color={"#0B3557"}
        hoverColor={"#0B3557"}
        title={"Explore Properties"}
        navigateTo={"idk"}
        textColor={"#FFFFFF"}
        padding="p-3"
      />
    </div>
  );
};

const OppurtunitiesListing = ({ opportunities }) => {
  return (
    <div className="grid grid-col-1 lg:grid-cols-2 md:grid-cols-2 gap-5">
      {opportunities.map((op, indx) => (
        <OpCard key={indx} op={op} />
      ))}
    </div>
  );
};

const InvestmentOpportunities = () => {
  const [investmentOptions, setInvestmentOptions] = useState(
    MockInvestmentOptions
  );
  const [estates, setEstates] = useState(MockEstates);
  return (
    <div className="flex flex-col w-full  lg:px-50 md:px-13 px-5">
      <div className="flex flex-col items-center w-full mt-5 ">
        <TitleAtom title={"Investment Opportunities"} />
        <ParagraphDescription
          description={
            "Choose from various investment types that match your risk profile and return expectations"
          }
        />
        <GrayLine />
      </div>
      <OppurtunitiesListing opportunities={investmentOptions} />
    </div>
  );
};

export default InvestmentOpportunities;
