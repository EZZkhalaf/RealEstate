import React from "react";
import HeroImage from "../assets/HeroImage.jpg";
import PriceHero from "./MainComponents/PriceHero";
import HeroTitle from "./MainComponents/HeroTitle";
import HeroSummary from "./MainComponents/HeroSummary";

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
      className=" bg-center bg-no-repeat w-full min-h-screen flex flex-col items-center justify-center bg-black/40"
    >
      <div className="absolute bg-center bg-no-repeat w-full min-h-screen flex flex-col items-center justify-center bg-black/40">
        <div className="flex flex-col items-center justify-center h-full gap-10">
          <HeroTitle
            title1={"Your Gateway to"}
            title2={"Real Estate Success"}
            paragraph={
              " Buy, sell, or invest in premium properties with expert guidance from Saudi Arabia's top real estate professionals"
            }
          />
          <div className="w-full">
            <PriceHero />
          </div>

          <HeroSummary summary={summary} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
