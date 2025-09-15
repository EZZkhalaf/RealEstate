import React, { useState } from "react";
import ListSelect from "./Atoms/ListSelect";

import TitleAtom from "./Atoms/TitleAtom";
import ParagraphDescription from "./Atoms/ParagraphDescription";
import EstateCards from "./MainComponents/FeaturedProps/EstateCards";
import ScrollAnimation from "../Animation/ScrollAnimation";
import MockEstates from "../MockData/MockEstates.json";
import GrayLine from "./Atoms/GrayLine";
import { StaticImageData } from "next/image";

interface FilterButtonInterface {
  text: string;
}

const FilterButton: React.FC<FilterButtonInterface> = ({ text }) => {
  return (
    <button
      className={`bg-white text-sm hover:bg-gray-300 p-1 rounded-lg border-1 border-gray-300 px-3 `}
    >
      {text}
    </button>
  );
};

interface GeneresInterface {
  generes: string[];
  filterOptions: string[];
}

interface ListingByAgentInterface {
  id: number;
  name: string;
  contact: string | null;
}

interface ListingInfoInterface {
  last_checked: string;
  listing_updated: string;
  listing_by: ListingByAgentInterface[];
}

interface StatsInterface {
  days_on_market: number;
  views: number;
  saves: number;
}

export interface EstateInterface {
  id: number;
  price: string;
  title: string;
  location: string;
  beds: number;
  baths: number;
  area: string;
  image: string[];
  features: string[];
  special_props: string[];
  actions: string[];
  stats: StatsInterface;
  listing_info: ListingInfoInterface;
  type: string;
  special_paragraph: string;
  market_status: string;
}

const FilteringOptions: React.FC<GeneresInterface> = ({
  generes,
  filterOptions,
}) => {
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
  const generes: string[] = [
    "All Properties",
    "Apartment",
    "Villa",
    "Penthouse",
    "Loft",
    "Compound",
  ];

  const [estates, setEstates] = useState<EstateInterface[]>(MockEstates);
  const filterOptions: string[] = [
    "Low to High",
    "High to Low",
    "Square Footage",
  ];
  return (
    <div className="w-full  flex flex-col  mt-20  lg:pr-25 lg:pl-25">
      <div className="flex flex-col items-center w-full">
        <TitleAtom title={"Featured Properties"} />
        <ParagraphDescription
          description={
            "Discover exceptional properties in Saudi Arabia's most prestigious locations"
          }
        />
        <GrayLine />
      </div>

      <FilteringOptions generes={generes} filterOptions={filterOptions} />
      <div className="w-full px-0">
        <EstateCards estates={estates} />
      </div>
    </div>
  );
};

export default FeaturedProp;
