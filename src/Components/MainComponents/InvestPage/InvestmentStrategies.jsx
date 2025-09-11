import React from "react";
import TitleAtom from "../../Atoms/TitleAtom";
import ParagraphDescription from "../../Atoms/ParagraphDescription";
import GrayLine from "../../Atoms/GrayLine";
import StrategyCard from "../../Molecule/InvestmentStrategies/StrategyCard";

const InvestmentStrategies = () => {
  const investmentStrategies = [
    {
      title: "Buy & Hold",
      description:
        "Long-term wealth building through rental income and appreciation",
      timeframe: "5+ years",
      riskLevel: "Low-Medium",
      pros: ["Steady cash flow", "Tax benefits", "Long-term appreciation"],
      cons: ["Property management", "Market risk", "Liquidity issues"],
      bestFor: "Conservative investors seeking steady returns",
      link: "Learn More",
      icon: "home-city", // 🏠 Good for stable property ownership
    },
    {
      title: "Fix & Flip",
      description:
        "Short-term profits through property renovation and quick resale",
      timeframe: "6-18 months",
      riskLevel: "High",
      pros: ["Quick profits", "Active involvement", "Market timing"],
      cons: ["High risk", "Capital intensive", "Market dependent"],
      bestFor: "Experienced investors with renovation skills",
      link: "Learn More",
      icon: "hammer-wrench", // 🔨 Represents renovation & flipping
    },
    {
      title: "Mixed-Use Developments",
      description:
        "Properties combining residential, commercial, and retail spaces",
      avgROI: "12-18%",
      minInvestment: "₹10M",
      riskLevel: "Medium-High",
      pros: [
        "Diversified income",
        "Higher returns",
        "Modern amenities",
        "Strategic locations",
      ],
      cons: ["High upfront costs", "Complex management", "Market fluctuations"],
      bestFor: "Investors seeking diversified returns and long-term growth",
      link: "Explore Properties",
      icon: "office-building-marker", // 🏢 Suits mixed-use/commercial + residential
    },
    {
      title: "REIT Investments",
      description:
        "Real Estate Investment Trusts for portfolio diversification",
      avgROI: "6-10%",
      minInvestment: "₹100K",
      riskLevel: "Low-Medium",
      pros: [
        "High liquidity",
        "Professional management",
        "Diversified portfolio",
        "Low entry barrier",
      ],
      cons: [
        "Lower control over assets",
        "Dividends taxed as income",
        "Market volatility",
      ],
      bestFor:
        "Beginner to moderate investors seeking passive income and diversification",
      link: "Learn More",
      icon: "chart-bar", // 📊 Fits financial/investment trusts
    },
  ];

  return (
    <div className="grid grid-cols-1  w-full mt-20  lg:px-50 md:px-20 px-10">
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
