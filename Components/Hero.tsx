"use client";
import { StaticImageData } from "next/image";
import HeroTitle from "./MainComponents/Hero/HeroTitle";
import { useEffect, useState } from "react";
import { getStaticHomePageHero } from "@/API/HeroApi";
import HeroSummary from "./MainComponents/Hero/HeroSummary";

interface HeroInerface {
  image?: string | StaticImageData;

  minHeight?: string;
  children: React.ReactNode;
}

const Hero: React.FC<HeroInerface> = ({
  image,

  minHeight = "min-h-screen",
  children,
}) => {
  const heroStyle = image
    ? {
        backgroundImage: `url(${typeof image === "image" ? image : image.src})`,
      }
    : {};

  const [topTitle, setTopTitle] = useState<string>("");
  const [bottomTitle, setBottomTitle] = useState<string>("");
  const [paragraph, setParagraph] = useState<string>("");
  const [summary, setSummary] = useState<any>(null);
  useEffect(() => {
    const fetchHeroInfo = async () => {
      const response = await getStaticHomePageHero();
      setTopTitle(response[0].topTitle || "");
      setBottomTitle(response[0].bottomTitle || "");
      setParagraph(response[0].paragraph || "");
      setSummary(response[0].heroSummary || []);
    };
    fetchHeroInfo();
  }, []);
  console.log(summary);
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
          <HeroSummary summary={summary} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
