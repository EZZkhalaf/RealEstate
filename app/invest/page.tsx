"use client";
import Hero from "@/Components/Hero";
import ScrollAnimation from "@/Animation/ScrollAnimation";
import ButtonCustomize from "@/Components/Atoms/ButtonCustomize";
import HeroSummary from "@/Components/MainComponents/Hero/HeroSummary";
import InvestmentOpportunities from "@/Components/MainComponents/InvestPage/InvestmentOpportunities";

import InvestmentTools from "@/Components/InvestmentTools";
import InvestmentAnalysis from "@/Components/MainComponents/InvestPage/InvestmentAnalysis";
import FinancialBreakDown from "@/Components/MainComponents/InvestPage/FinancialBreakDown";
import InvestmentStrategies from "@/Components/MainComponents/InvestPage/InvestmentStrategies";
import MarketAnalysis from "@/Components/MainComponents/InvestPage/MarketAnalysis";
import StartInvestment from "@/Components/MainComponents/InvestPage/StartInvestment";
import Footer from "@/Components/Footer";
import EstatesSection from "@/Components/MainComponents/InvestPage/EstatesSection";

export default function Invest() {
  return (
    <div className="w-full">
      <Hero invest={true} minHeight="max-h-fit">
        <ScrollAnimation>
          <div className="flex flex-col items-center justify-center h-full w-full gap-10 text-center pb-6">
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
          </div>
        </ScrollAnimation>
      </Hero>

      <InvestmentOpportunities />

      <EstatesSection />

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
}
