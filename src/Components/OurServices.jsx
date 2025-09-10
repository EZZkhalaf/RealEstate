import React from "react";
import TitleAtom from "./Atoms/TitleAtom";
import ParagraphDescription from "./Atoms/ParagraphDescription";
import ServicesCards from "./MainComponents/OurServices/ServicesCards";
import ScrollAnimation from "../Animation/ScrollAnimation";
import GrayLine from "./Atoms/GrayLine";

const OurServices = () => {
  const services = [
    {
      icon: "home",
      title: "Property Buying",
      description:
        "Find your dream home with expert guidance through every step of the buying process.",
      features: [
        "Property Search",
        "Market Analysis",
        "Negotiation Support",
        "Legal Assistance",
      ],
      cta: "Start Buying",
    },
    {
      icon: "currency-usd",
      title: "Property Selling",
      description:
        "Maximize your property value with our comprehensive selling services and market expertise.",
      features: [
        "Property Valuation",
        "Marketing Strategy",
        "Professional Photography",
        "Deal Closing",
      ],
      cta: "Get Valuation",
    },
    {
      icon: "arrow-up-right",
      title: "Real Estate Investment",
      description:
        "Build wealth through strategic real estate investments with professional portfolio management.",
      features: [
        "Investment Analysis",
        "ROI Calculation",
        "Market Research",
        "Portfolio Management",
      ],
      cta: null,
    },
  ];

  return (
    <div className="flex flex-col items-center mt-20 lg:px-25">
      <ScrollAnimation>
        <TitleAtom title={"Our Services"} />
      </ScrollAnimation>
      <ScrollAnimation>
        <ParagraphDescription
          description={
            "Comprehensive real estate solutions tailored to your needs"
          }
        />
        <GrayLine width={"w-full"} />
      </ScrollAnimation>

      <div className="flex items-center p-5">
        <ServicesCards services={services} />
      </div>
    </div>
  );
};

export default OurServices;
