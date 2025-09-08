import React, { useState } from "react";
import ListSelect from "./Atoms/ListSelect";
// import EstateCards from "./MainComponents/Fea/EstateCards";
import estate1 from "../assets/estate1.avif";
import estate2 from "../assets/estate2.avif";
import TitleAtom from "./Atoms/TitleAtom";
import ParagraphDescription from "./Atoms/ParagraphDescription";
import EstateCards from "./MainComponents/FeaturedProps/EstateCards";
import ScrollAnimation from "../Animation/ScrollAnimation";
import MockEstates from "../MockData/MockEstates.json";
const FilterButton = ({ text }) => {
  return (
    <button
      className={`bg-white text-sm hover:bg-gray-300 p-1 rounded-lg border-1 border-gray-300 px-3 `}
    >
      {text}
    </button>
  );
};

const FilteringOptions = ({ generes, filterOptions }) => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 mb-10 mt-8 px-3">
      <ScrollAnimation type="fade-left" delay={0.6} animationTime={0.4}>
        <div className="flex flex-wrap gap-2 sm:gap-1 md:gap-1  ">
          {generes.map((b, index) => (
            <FilterButton text={b} key={index} />
          ))}
        </div>
      </ScrollAnimation>

      <ScrollAnimation type="fade-right" delay={0.6} animationTime={0.4}>
        <ListSelect list={filterOptions} />
      </ScrollAnimation>
    </div>
  );
};

const FeaturedProp = () => {
  const generes = [
    "All Properties",
    "Apartment",
    "Villa",
    "Penthouse",
    "Loft",
    "Compound",
  ];

  const [estates, setEstates] = useState(MockEstates);
  const filterOptions = ["Low to High", "High to Low", "Square Footage"];
  return (
    <div className="w-full  flex flex-col  mt-20  lg:pr-25 lg:pl-25">
      <div className="flex flex-col items-center w-full">
        <TitleAtom title={"Featured Properties"} />

        <ParagraphDescription
          description={
            "Discover exceptional properties in Saudi Arabia's most prestigious locations"
          }
        />
      </div>

      <FilteringOptions generes={generes} filterOptions={filterOptions} />
      <div className="w-full px-0">
        <EstateCards estates={estates} />
      </div>
    </div>
  );
};

export default FeaturedProp;
