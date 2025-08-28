import React from "react";
import ScrollAnimation from "../../../Animation/ScrollAnimation";

const HeroTitle = ({ title1, title2, paragraph }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full mt-25 gap-2">
      <ScrollAnimation type="fade-right">
        <h1 className="text-white text-3xl lg:text-6xl font-bold">{title1}</h1>
      </ScrollAnimation>
      <ScrollAnimation type="fade-left">
        <h1 className="block text-[#bb9a74] text-3xl lg:text-6xl font-bold">
          {title2}
        </h1>
      </ScrollAnimation>
      <ScrollAnimation type="fade-up" delay={1}>
        <p className="  text-xl md:text-xl text-white/90 max-w-2xl mx-auto text-center">
          {paragraph}
        </p>
      </ScrollAnimation>
    </div>
  );
};

export default HeroTitle;
