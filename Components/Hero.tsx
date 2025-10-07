import { StaticImageData } from "next/image";
import HeroTitle from "./MainComponents/Hero/HeroTitle";

import HeroSummary from "./MainComponents/Hero/HeroSummary";

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
  console.log(image);
  const heroStyle = image
    ? {
        backgroundImage: `url('http://localhost:8055/assets/${image}')`,
      }
    : {};

  const topTitle = heroData.topTitle || "Welcome to Real";
  const bottomTitle = heroData.bottomTitle || "Estate Site";

  const paragraph = heroData.paragraph || "Invest and buy or sell in estates";
  const summary = heroData.heroSummary || [];
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
