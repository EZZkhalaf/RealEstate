import React from "react";
import HeroImage from "../assets/HeroImage.jpg";
import HeroTitle from "./MainComponents/Hero/HeroTitle";
import PriceHero from "./MainComponents/Hero/PriceHero";
import HeroSummary from "./MainComponents/Hero/HeroSummary";
import ScrollAnimation from "../Animation/ScrollAnimation";

const Hero = () => {
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

  return (
    <div
      style={{ backgroundImage: `url(${HeroImage})` }}
      className=" bg-center bg-no-repeat min-w-full bg-fit min-h-screen flex flex-col items-center justify-center bg-black/40"
    >
      <div className="relative bg-center bg-no-repeat w-full min-h-screen flex flex-col items-center justify-center bg-black/40">
        <div className="flex flex-col items-center justify-center h-full gap-10">
          <HeroTitle
            title1={"Your Gateway to"}
            title2={"Real Estate Success"}
            paragraph={
              " Buy, sell, or invest in premium properties with expert guidance from Saudi Arabia's top real estate professionals"
            }
          />
          <div className="w-full px-2">
            <ScrollAnimation type="zoom-in" delay={1.5}>
              <PriceHero />
            </ScrollAnimation>
          </div>
          <ScrollAnimation type="fade-up" delay={2}>
            <HeroSummary summary={summary} />
          </ScrollAnimation>
        </div>
      </div>
    </div>
  );
};

export default Hero;
