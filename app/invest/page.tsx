"use client";
import Hero from "@/Components/Hero";
import ScrollAnimation from "@/Animation/ScrollAnimation";
import ButtonCustomize from "@/Components/Atoms/ButtonCustomize";
import HeroSummary from "@/Components/MainComponents/Hero/HeroSummary";
import InvestmentOpportunities from "@/app/invest/Components/InvestmentOpportunities";

import InvestmentTools from "@/Components/InvestmentTools";
import InvestmentAnalysis from "@/Components/MainComponents/InvestPage/InvestmentAnalysis";
import FinancialBreakDown from "@/Components/MainComponents/InvestPage/FinancialBreakDown";
import InvestmentStrategies from "@/app/invest/Components/InvestmentStrategies";
import MarketAnalysis from "@/app/invest/Components/MarketAnalysis";
import StartInvestment from "@/app/invest/Components/StartInvestment";
import Footer from "@/Components/Footer";
import EstatesSection from "@/app/invest/Components/EstatesSection";
import ROICalculator from "@/Components/MainComponents/InvestmentTools/ROICalculator";
import InvestToolsPageContainer from "@/app/invest/Components/InvestToolsPageContainer";

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
        <InvestToolsPageContainer />
      </InvestmentTools>
      <InvestmentStrategies />
      <MarketAnalysis />
      <StartInvestment />
      <Footer />
    </div>
  );
}
