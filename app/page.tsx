import PriceHero from "@/Components/MainComponents/Hero/PriceHero";
import Hero from "../Components/Hero";
import HeroImage from "../public/assets/HeroImage.jpg";
import FeaturedProp from "@/Components/FeaturedProp";
import OurServices from "@/Components/OurServices";
import InvestmentTools from "@/Components/InvestmentTools";
import OurAgents from "@/Components/OurAgents";
import MarketInsights from "@/Components/MarketInsights";
import ContactUs from "@/Components/ContactUs";
import Footer from "@/Components/Footer";
import InvestmentHomeContent from "@/Components/MainComponents/InvestmentTools/InvestmentHomeContent";
import { getStaticContactUsInfo } from "@/API/InvestmentOptionsApi";
import { getStaticHomePageHero } from "@/API/HeroApi";
import {
  getStaticMarketReports,
  getStaticOurServices,
  getStaticPropertyStats,
} from "@/API/InvestmentApi";
import { getStaticFeaturedAgents } from "@/API/AgnetsApi";
import { getStaticFooter } from "@/API/OtherApi";

export default async function Home() {
  const homePageHero = await getStaticHomePageHero(false);
  const ourServicesData = await getStaticOurServices();
  const agentsData = await getStaticFeaturedAgents();
  const marketInsightData = await getStaticMarketReports();
  const marketSummaryInsightListingData = await getStaticPropertyStats();
  const contactUsData = await getStaticContactUsInfo();
  const footerData = await getStaticFooter();
  return (
    <div className="w-full bg-gray-100 flex flex-col items-center">
      <Hero heroData={homePageHero} image={HeroImage} invest={false}>
        <div className="flex flex-col items-center justify-center h-full w-full gap-10 text-center">
          <PriceHero />
        </div>
      </Hero>
      <FeaturedProp />

      <OurServices ourServices={ourServicesData} />

      <InvestmentTools>
        <InvestmentHomeContent />
      </InvestmentTools>
      <OurAgents agentsData={agentsData} />
      <MarketInsights
        marketInsightsData={marketInsightData}
        marketInsightSummaryListingData={marketSummaryInsightListingData}
      />
      <ContactUs contactUsData={contactUsData} />
      <Footer footerData={footerData} />
    </div>
  );
}
