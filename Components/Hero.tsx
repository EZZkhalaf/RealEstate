"use client";
import { StaticImageData } from "next/image";
import HeroTitle from "./MainComponents/Hero/HeroTitle";
import { useEffect, useState } from "react";
import { getStaticHomePageHero } from "@/API/HeroApi";
import HeroSummary from "./MainComponents/Hero/HeroSummary";
import Loading from "./Atoms/Loading";

interface HeroInerface {
  image?: string | StaticImageData;
  heroData: any;
  minHeight?: string;
  children: React.ReactNode;
  invest?: boolean;
}

const Hero: React.FC<HeroInerface> = ({
  image,
  heroData,
  minHeight = "min-h-screen",
  children,
  invest = false,
}) => {
  const heroStyle = image
    ? {
        backgroundImage: `url(${
          typeof image === "string" ? image : image.src
        })`,
      }
    : {};

  const [topTitle, setTopTitle] = useState<string>(heroData[0].topTitle || "");
  const [bottomTitle, setBottomTitle] = useState<string>(
    heroData[0].bottomTitle || ""
  );
  const [paragraph, setParagraph] = useState<string>(
    heroData[0].paragraph || ""
  );
  const [summary, setSummary] = useState<any>(heroData[0].heroSummary || []);
  return (
    <div
      style={heroStyle}
      className={`bg-center bg-no-repeat bg-cover min-w-full ${minHeight} flex flex-col items-center justify-center ${
        image ? "bg-black/40" : "bg-black/70"
      }`}
    >
      <div
        className={`relative w-full ${minHeight} flex flex-col items-center justify-center bg-black/40`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-10 text-center ">
          <HeroTitle
            title1={topTitle}
            title2={bottomTitle}
            paragraph={paragraph}
          />

          {children}

          <HeroSummary summary={summary} invest={invest} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
