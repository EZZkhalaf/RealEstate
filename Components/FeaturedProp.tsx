import React, { useEffect, useState } from "react";
import ListSelect from "./Atoms/ListSelect";
import TitleAtom from "./Atoms/TitleAtom";
import ParagraphDescription from "./Atoms/ParagraphDescription";
import EstateCards from "./MainComponents/FeaturedProps/EstateCards";
import ScrollAnimation from "../Animation/ScrollAnimation";
import MockEstates from "../MockData/MockEstates.json";
import GrayLine from "./Atoms/GrayLine";
import { StaticImageData } from "next/image";
import { getStaticEstates } from "@/API/EstatesApi";
import { EstateInterface, GeneresInterface } from "@/Interface/EstateInterface";
import { FilterButtonInterface } from "@/Interface/AgentInterface";

const FilterButton: React.FC<FilterButtonInterface> = ({ text }) => {
  return (
    <button
      className={`bg-white text-sm hover:bg-gray-300 p-1 rounded-lg border-1 border-gray-300 px-3 `}
    >
      {text}
    </button>
  );
};

const FilteringOptions: React.FC<GeneresInterface> = ({
  generes,
  filterOptions,
}) => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 mb-10 mt-8 px-3">
      <ScrollAnimation type="fade-left" delay={0.6} animationTime={0.4}>
        <div className="flex flex-wrap gap-2 sm:gap-1 md:gap-1  ">
          {generes.map((b, index: number) => (
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

  const [estates, setEstates] = useState<any[]>([]);
  const fetchEstates = async () => {
    const data: any = await getStaticEstates();

    const parsed = data?.map((estate: any) => ({
      ...estate,
      features: Array.isArray(estate.features) ? estate.features : [],
      special_props: Array.isArray(estate.special_props)
        ? estate.special_props
        : [],
      actions: Array.isArray(estate.actions) ? estate.actions : [],
      stats: estate.stats || {},
      listing_info: estate.listing_info || {},
      image: Array.isArray(estate.image)
        ? estate.image
        : estate.image
        ? [estate.image]
        : [],
    }));

    setEstates(parsed);
  };
  useEffect(() => {
    fetchEstates();
  }, []);

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

      <div className="w-full px-0 max-w">
        <FilteringOptions generes={generes} filterOptions={filterOptions} />
        <EstateCards estates={estates} />
      </div>
    </div>
  );
};

export default FeaturedProp;
