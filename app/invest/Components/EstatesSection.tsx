"use client";
import { useEffect, useState } from "react";
import TitleAtom from "@/Components/Atoms/TitleAtom";
import ParagraphDescription from "@/Components/Atoms/ParagraphDescription";
import GrayLine from "@/Components/Atoms/GrayLine";
import EstateCards from "@/Components/MainComponents/FeaturedProps/EstateCards";
import { getStaticInvestementEstates } from "@/API/EstatesApi";
import { EstateInterface } from "@/Interface/EstateInterface";
import { useQuery } from "@tanstack/react-query";

const EstatesSection = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["estates"],
    queryFn: async () => {
      const data: any = await getStaticInvestementEstates();

      return data;
    },
  });

  const estates: EstateInterface[] = data ?? [];
  return (
    <>
      <div className="flex flex-col items-center w-full max-w-7xl mt-8 ">
        <TitleAtom title="Investment Properties" />
        <ParagraphDescription description="Choose from various investment property and choose the risk for it" />
        <GrayLine />
      </div>
      <EstateCards
        estates={estates}
        buttonTitle="View All Investment Properties"
        invest={true}
      />
    </>
  );
};

export default EstatesSection;
