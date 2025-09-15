"use client";
import PriceHero from "@/Components/MainComponents/Hero/PriceHero";
import Hero from "../Components/Hero";
import HeroImage from "../public/assets/HeroImage.jpg";
import HeroSummary from "@/Components/MainComponents/Hero/HeroSummary";
import { useEffect } from "react";
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
import { readItems } from "@directus/sdk";

export interface SummaryInterface {
  total: string;
  name: string;
}

export default async function Home() {
  const summary: SummaryInterface[] = [
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

      <InvestmentTools>
        <div className="grid grid-cols-1">
          <ScrollAnimation>
            <InvestmentSummary />
          </ScrollAnimation>

          <ScrollAnimation>
            <MarketInsightsSummary />
          </ScrollAnimation>

          <ScrollAnimation>
            <ViewButtonAtom
              title={"Get Investment Consultation "}
              // navigateTo={"idk"}
              color={"#0B3557"}
              hoverColor={"#5A7792"}
              textColor={"#FFFFFF"}
            />
          </ScrollAnimation>
        </div>
      </InvestmentTools>
      <OurAgents />
      <MarketInsights />
      <ContactUs />
      <Footer />
    </div>
  );
}
