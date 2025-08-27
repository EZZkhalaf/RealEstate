import React from "react";

const HeroTitle = ({ title1, title2, paragraph }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-10">
      <h1 className="text-white text-6xl font-bold">{title1}</h1>
      <h1 className="block text-[#bb9a74] text-6xl font-bold">{title2}</h1>
      <p className="  text-xl md:text-2xl text-white/90 max-w-2xl mx-auto text-center">
        {paragraph}
      </p>
    </div>
  );
};

export default HeroTitle;
