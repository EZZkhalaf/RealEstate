import React, { useState } from "react";
import TitleAtom from "../../Atoms/TitleAtom";
import ParagraphDescription from "../../Atoms/ParagraphDescription";
import GrayLine from "../../Atoms/GrayLine";
import IconAtom from "../../Atoms/IconAtom";
import { Icon } from "@iconify/react";
import ViewButtonAtom from "../../Atoms/ViewButtonAtom";
import MockEstates from "../../../MockData/MockEstates.json";
import EstateCards from "../FeaturedProps/EstateCards";
const OpCard = ({ op }) => {
  return (
    <div className="flex flex-col gap-3 w-full justify-center shadow-2xl p-3 rounded-lg">
      <div className="flex gap-2 items-center ">
        <IconAtom icon={op.icon} />
        <div className="flex flex-col ">
          <TitleAtom title={op.title} textSizeDefault="xl" textSizeLarge="xl" />
          <ParagraphDescription description={op.desc} margin={false} />
        </div>
      </div>

      <div className="flex justify-around mt-5">
        <div className="flex flex-col gap-1">
          <p className="font-semibold">{op.avgROI}</p>
          <p>Avg. ROI</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-semibold">{op.minInvestment}</p>
          <p>Min. Investment</p>
        </div>
        <div className="flex flex-col gap-1">
          <p
            className={`font-semibold text-white px-2 text-xs rounded-xl w-fit
      ${op.riskLevel === "Low" ? "bg-green-500" : ""}
      ${op.riskLevel === "Medium" ? "bg-yellow-500" : ""}
      ${op.riskLevel === "Medium-High" ? "bg-orange-500" : ""}
      ${op.riskLevel === "High" ? "bg-red-500" : ""}`}
          >
            {op.riskLevel}
          </p>
          <p>Risk Level</p>
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
  const investmentOptions = [
    {
      title: "Commercial Real Estate",
      desc: "Office buildings, retail spaces, and mixed-use developments",
      avgROI: "10-15%",
      minInvestment: "₹5M",
      riskLevel: "Medium",
      highlights: [
        "Stable cash flow",
        "Long-term leases",
        "Professional tenants",
        "Tax advantages",
      ],
      buttonText: "Explore Properties",
      icon: "office-building", // mdi-light:office-building
    },
    {
      title: "Residential Properties",
      desc: "Apartments, villas, and townhouses in prime locations",
      avgROI: "7-12%",
      minInvestment: "₹1M",
      riskLevel: "Low",
      highlights: [
        "Easy to manage",
        "High demand",
        "Steady appreciation",
        "Rental income",
      ],
      buttonText: "Explore Properties",
      icon: "home", // mdi-light:home
    },
    {
      title: "Mixed-Use Developments",
      desc: "Properties combining residential, commercial, and retail spaces",
      avgROI: "12-18%",
      minInvestment: "₹10M",
      riskLevel: "Medium-High",
      highlights: [
        "Diversified income",
        "Higher returns",
        "Modern amenities",
        "Strategic locations",
      ],
      buttonText: "Explore Properties",
      icon: "city-variant", // mdi-light:city-variant
    },
    {
      title: "REIT Investments",
      desc: "Real Estate Investment Trusts for portfolio diversification",
      avgROI: "6-10%",
      minInvestment: "₹100K",
      riskLevel: "High",
      highlights: [
        "High liquidity",
        "Professional management",
        "Diversified portfolio",
        "Low entry barrier",
      ],
      buttonText: "Explore Properties",
      icon: "chart-line", // mdi-light:chart-line
    },
  ];

  const [estates, setEstates] = useState(MockEstates);
  return (
    <div className="flex flex-col w-full px-20">
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
