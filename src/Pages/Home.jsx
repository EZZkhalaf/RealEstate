import { useEffect } from "react";
import ContactUs from "../Components/ContactUs";
import FeaturedProp from "../Components/FeaturedProp";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import InvestmentTools from "../Components/InvestmentTools";
import MarketInsights from "../Components/MarketInsights";
import OurAgents from "../Components/OurAgents";
import OurServices from "../Components/OurServices";
import GrayLine from "../Components/Atoms/GrayLine";
import HeroImage from "../assets/HeroImage.jpg";
import HeroSummary from "../Components/MainComponents/Hero/HeroSummary";
import PriceHero from "../Components/MainComponents/Hero/PriceHero";
const Home = () => {
  const summary = [
    {
      total: "2500+",
      name: "Premium Properties",
    },
    {
      total: "150+",
      name: "Expert Agents",
    },
    {
      total: "98%",
      name: "Client Satisfaction",
    },
  ];
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <div className="w-full bg-gray-100">
      <Hero
        image={HeroImage}
        heroTitle1={"Your Gateway to"}
        heroTitle2={"Real Estate Success"}
        heroParagraph={
          "Buy, sell, or invest in premium properties with expert guidance from Saudi Arabia's top real estate professionals"
        }
      >
        <div className="flex flex-col items-center justify-center h-full w-full gap-10 text-center">
          <PriceHero />
          <HeroSummary summary={summary} />
        </div>
      </Hero>
      <FeaturedProp />

      <OurServices />

      <InvestmentTools />
      <OurAgents />
      <MarketInsights />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
