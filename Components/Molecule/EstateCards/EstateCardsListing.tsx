"use client";

import React from "react";
import { useRouter } from "next/navigation";
import ScrollAnimation from "../../../Animation/ScrollAnimation";
import ViewButtonAtom from "../../Atoms/ViewButtonAtom";
import SingleCard from "./SingleCard";
import { EstateCardsInterface } from "../../MainComponents/FeaturedProps/EstateCards";
import { EstateInterface } from "@/Interface/EstateInterface";

const EstateCardsListing: React.FC<EstateCardsInterface> = ({
  estates,
  buttonTitle = "View All Properties",
}) => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center w-full">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-8">
        {estates.map((e: EstateInterface, index: number) => (
          <div key={index} className="rounded-2xl">
            <ScrollAnimation>
              <SingleCard estate={e} />
            </ScrollAnimation>
          </div>
        ))}
      </div>

      <div onClick={() => router.push("/properties")} className="mt-8">
        <ScrollAnimation>
          <ViewButtonAtom
            title={buttonTitle}
            color={"#FFFFFF"}
            hoverColor={"#0B3557"}
            textColor={"#0B3557"}
            hoverTextColor={"#FFFFFF"}
          />
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default EstateCardsListing;
