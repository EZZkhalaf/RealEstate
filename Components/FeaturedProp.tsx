"use client";
import React, { useEffect, useState } from "react";
import TitleAtom from "./Atoms/TitleAtom";
import ParagraphDescription from "./Atoms/ParagraphDescription";
import EstateCards from "./MainComponents/FeaturedProps/EstateCards";
import GrayLine from "./Atoms/GrayLine";
import { getStaticEstates } from "@/API/EstatesApi";
import { FilteringOptions } from "./MainComponents/FeaturedProps/FilteringOptions";
import Loading from "./Atoms/Loading";
import { EstateInterface } from "@/Interface/EstateInterface";
import EstatePopUpInfo from "./Molecule/Properties/EstatePopUpInfo";

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
  const [sortOption, setSortOption] = useState<string | number>("Low to High");
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
  }, [selectedGenre, sortOption]);

  const filterOptions: string[] = ["Low to High", "High to Low"];
  return (
    <div className="w-full  flex flex-col  mt-20  max-w-7xl  ">
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
      <EstateCards estates={estates} />
    </div>
  );
};

export default FeaturedProp;
