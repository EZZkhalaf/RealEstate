import React, { useState } from "react";
import TitleAtom from "../Components/Atoms/TitleAtom";
import ParagraphDescription from "../Components/Atoms/ParagraphDescription";
import Introduction from "../Components/MainComponents/InvestPage/Introduction";
import TypesOfEstates from "../Components/MainComponents/InvestPage/TypesOfEstates";
import HowItWork from "../Components/MainComponents/InvestPage/HowItWork";
import InvestRisks from "../Components/MainComponents/InvestPage/InvestRisks";
import Footer from "../Components/Footer";
import ViewButtonAtom from "../Components/Atoms/ViewButtonAtom";
import { useNavigate } from "react-router-dom";
import Hero from "../Components/Hero";
import hero2 from "../assets/hero2.jpg";
import HeroSummary from "../Components/MainComponents/Hero/HeroSummary";
import ButtonCustomize from "../Components/Atoms/ButtonCustomize";
import InvestmentOpportunities from "../Components/MainComponents/InvestPage/InvestmentOpportunities";
import ScrollAnimation from "../Animation/ScrollAnimation";
import GrayLine from "../Components/Atoms/GrayLine";
import EstateCards from "../Components/MainComponents/FeaturedProps/EstateCards";
import MockEstates from "../MockData/MockEstates.json";
import InvestmentTools from "../Components/InvestmentTools";
import InvestmentAnalysis from "../Components/MainComponents/InvestPage/InvestmentAnalysis";
import FinancialBreakDown from "../Components/MainComponents/InvestPage/FinancialBreakDown";
import InvestmentStrategies from "../Components/MainComponents/InvestPage/InvestmentStrategies";
import MarketAnalysis from "../Components/MainComponents/InvestPage/MarketAnalysis";
import StartInvestment from "../Components/MainComponents/InvestPage/StartInvestment";
const Invest = () => {
  const navigate = useNavigate();

  const summary = [
    {
      total: "₹2.8B+",
      name: "Total Investments",
    },
    {
      total: "8.5%",
      name: "Average ROI",
    },
    {
      total: "500+",
      name: "Investment Properties",
    },
    {
      total: "1,200+",
      name: "Satisfied Investors",
    },
  ];

  const [estates, setEstates] = useState(MockEstates);

  return (
    <div className="w-full">
      <Hero
        heroTitle1={"Build Wealth Through"}
        heroTitle2={"Real Estate Investment"}
        heroParagraph={
          "Discover premium investment opportunities in Saudi Arabia's fastest-growing real estate markets"
        }
        priceHeroExist={false}
        minHeight="max-h-fit"
      >
        <ScrollAnimation>
          <div className="flex flex-col items-center justify-center h-full w-full gap-10 text-center">
            <div className="flex md:flex-row flex-col lg:flex-row gap-3 w-full px-4">
              <ButtonCustomize
                text="Find Investment Property"
                // icon="home"
                color="#22C55E" // green-500
                hoverColor="#16A34A" // green-600
                textColor="#FFFFFF"
                hoverTextColor="#FFFFFF"
              />

              <ButtonCustomize
                text="Calculate Returns"
                // icon="calculator-variant"
                color="#FFFFFF"
                hoverColor="#9CA3AF"
                textColor="#000000"
                hoverTextColor="#FFFFFF"
              />
            </div>
            <HeroSummary summary={summary} />
          </div>
        </ScrollAnimation>
      </Hero>

      {/* <div className="mt-20 px-10 bg-gray-100">
        <div className="py-3 px-6">
          <TitleAtom
            title={"Investment in Estates"}
            textSizeDefault="text-3xl"
          />
          <ParagraphDescription
            description={
              "Investing in estates allows you to generate passive income and build wealth through rental returns and property appreciation."
            }
            textAlignment=" "
          />
        </div>
        <Introduction />

        <TypesOfEstates />

        <HowItWork />

        <InvestRisks />
      </div> */}

      <InvestmentOpportunities />

      <div className="flex flex-col items-center w-full mt-8 ">
        <TitleAtom title={"Investment Properties"} />
        <ParagraphDescription
          description={
            "Choose from various investment property and choose the risl  for it "
          }
        />
        <GrayLine />
      </div>

      <EstateCards
        estates={estates}
        buttonTitle="View All Investment Properties"
      />

      <InvestmentTools
        title="Investment Calculator"
        description="Calculate detailed returns, cash flow, and investment metrics for any property"
      >
        <div className="grid grid-cols-1 gap-2 ">
          <InvestmentAnalysis />
          <FinancialBreakDown />
          <ButtonCustomize
            text="Contact"
            icon="email"
            color="#0B3557"
            hoverColor="#0B3557E6"
            textColor="#FFFFFF"
            hoverTextColor="#FFFFFF"
          />
          <ButtonCustomize
            text="Call"
            icon="phone"
            color="#FFFFFF"
            hoverColor="#9CA3AF"
            textColor="#000000"
            hoverTextColor="#FFFFFF"
          />
        </div>
      </InvestmentTools>
      <InvestmentStrategies />
      <MarketAnalysis />
      <StartInvestment />
      <Footer />
    </div>
  );
};

export default Invest;
