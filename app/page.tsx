import PriceHero from "@/Components/MainComponents/Hero/PriceHero";
import Hero from "../Components/Hero";
import HeroImage from "../public/assets/HeroImage.jpg";

import FeaturedProp from "@/Components/FeaturedProp";
import OurServices from "@/Components/OurServices";
import InvestmentTools from "@/Components/InvestmentTools";
import ScrollAnimation from "@/Animation/ScrollAnimation";
import InvestmentSummary from "@/Components/MainComponents/InvestmentTools/InvestmentSummary";
import MarketInsightsSummary from "@/Components/MainComponents/InvestmentTools/MarketInsightsSummary";
import ViewButtonAtom from "@/Components/Atoms/ViewButtonAtom";
import OurAgents from "@/Components/OurAgents";
import MarketInsights from "@/Components/MarketInsights";
import ContactUs from "@/Components/ContactUs";
import Footer from "@/Components/Footer";
import ROICalculator from "@/Components/MainComponents/InvestmentTools/ROICalculator";
import InvestmentHomeContent from "@/Components/MainComponents/InvestmentTools/InvestmentHomeContent";

export default async function Home() {
  return (
    <div className="w-full bg-gray-100">
      <Hero image={HeroImage}>
        <div className="flex flex-col items-center justify-center h-full w-full gap-10 text-center">
          <PriceHero />
        </div>
      </Hero>
      <FeaturedProp />

      <OurServices />

      <InvestmentTools>
        <InvestmentHomeContent />
      </InvestmentTools>
      <OurAgents />
      <MarketInsights />
      <ContactUs />
      <Footer />
    </div>
  );
}
