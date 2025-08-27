import React from "react";
import HeroImage from "../assets/HeroImage.jpg";
import PriceHero from "./MainComponents/PriceHero";

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
          <h1 className="text-white text-6xl font-bold">Your Gateway to</h1>
          <h1 className="block text-[#bb9a74] text-6xl font-bold">
            Real Estate Success
          </h1>
          <p className="  text-xl md:text-2xl text-white/90 max-w-2xl mx-auto text-center">
            Buy, sell, or invest in premium properties with expert guidance from
            Saudi Arabia's top real estate professionals
          </p>
          <div className="w-full">
            <PriceHero />
          </div>
          <div className="w-full flex flex-row gap-6 items-center justify-around">
            {summary.map((element) => (
              <div className="flex flex-col items-center justify-center">
                <p className="text-white text-3xl font-bold mb-2">
                  {element.total}
                </p>
                <p className="text-white/80">{element.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
