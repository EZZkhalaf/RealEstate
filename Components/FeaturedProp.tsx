"use client";
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
import { FilteringOptions } from "./MainComponents/FeaturedProps/FilteringOptions";
import Loading from "./Atoms/Loading";

// const FilteringOptions: React.FC<{
//   generes: string[];
//   filterOptions: string[];
//   selectedGenre: string;
//   sortOption?: string;
//   setSortOption?: (sort: string) => void;
//   setSelectedGenre: (genre: string) => void;
// }> = ({
//   generes,
//   filterOptions,
//   selectedGenre,
//   setSelectedGenre,
//   sortOption,
//   setSortOption,
// }) => {
//   return (
//     <div className="flex flex-wrap items-center justify-between gap-4 mb-10 mt-8 px-3">
//       <ScrollAnimation type="fade-left" delay={0.6} animationTime={0.4}>
//         <div className="flex flex-wrap gap-2 sm:gap-1 md:gap-1  ">
//           {generes.map((b, index: number) => (
//             <FilterButton
//               text={b}
//               key={index}
//               selected={selectedGenre === b}
//               onClick={() => setSelectedGenre(b)}
//             />
//           ))}
//         </div>
//       </ScrollAnimation>

//       <ScrollAnimation type="fade-right" delay={0.6} animationTime={0.4}>
//         <ListSelect
//           list={filterOptions}
//           value={sortOption}
//           onChange={setSortOption}
//         />
//       </ScrollAnimation>
//     </div>
//   );
// };

const FeaturedProp = () => {
  const generes: string[] = [
    "All Properties",
    "Apartment",
    "Villa",
    "Penthouse",
    "Loft",
    "Compound",
  ];
  const [selectedGenre, setSelectedGenre] = useState<string>("All Properties");
  const [sortOption, setSortOption] = useState<string>("Low to High");
  const [estates, setEstates] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchEstates = async () => {
    setLoading(true);
    const data: any = await getStaticEstates(1, selectedGenre, sortOption);
    const parsed = data?.map((estate: any) => ({
      ...estate,
      features: Array.isArray(estate.features) ? estate.features : [],
      special_props: Array.isArray(estate.special_props)
        ? estate.special_props
        : [],
      actions: Array.isArray(estate.actions) ? estate.actions : [],
      stats: estate.stats || {},
      listing_info: estate.listing_info || {},
      image: Array.isArray(estate.images)
        ? estate.images
        : estate.images
        ? [estate.images]
        : [],
    }));

    setEstates(parsed);
    setLoading(false);
  };
  useEffect(() => {
    fetchEstates();
  }, [selectedGenre]);

  const filterOptions: string[] = [
    "Low to High",
    "High to Low",
    "Square Footage",
  ];
  if (loading) return <Loading />;
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
      <FilteringOptions
        generes={generes}
        filterOptions={filterOptions}
        selectedGenre={selectedGenre}
        sortOption={sortOption}
        setSortOption={setSortOption}
        setSelectedGenre={setSelectedGenre}
      />{" "}
      <div className="w-full px-0">
        <EstateCards estates={estates} />
      </div>
    </div>
  );
};

export default FeaturedProp;
