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
const Home = () => {
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
      <Hero />
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
