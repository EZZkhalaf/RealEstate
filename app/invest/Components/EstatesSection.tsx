// Components/MainComponents/InvestPage/EstatesSection.tsx
"use client";

import { useEffect, useState } from "react";
import TitleAtom from "@/Components/Atoms/TitleAtom";
import ParagraphDescription from "@/Components/Atoms/ParagraphDescription";
import GrayLine from "@/Components/Atoms/GrayLine";
import EstateCards from "@/Components/MainComponents/FeaturedProps/EstateCards";
import { getStaticEstates } from "@/API/EstatesApi";

const EstatesSection = () => {
  const [estates, setEstates] = useState<any[]>([]);

  useEffect(() => {
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

    fetchEstates();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center w-full mt-8">
        <TitleAtom title="Investment Properties" />
        <ParagraphDescription description="Choose from various investment property and choose the risk for it" />
        <GrayLine />
      </div>
      <EstateCards
        estates={estates}
        buttonTitle="View All Investment Properties"
      />
    </>
  );
};

export default EstatesSection;
