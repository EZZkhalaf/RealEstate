"use client";

import React from "react";
import { useRouter } from "next/navigation";
import ScrollAnimation from "../../../Animation/ScrollAnimation";
import ViewButtonAtom from "../../Atoms/ViewButtonAtom";
import { EstateCardsInterface } from "../../MainComponents/FeaturedProps/EstateCards";
import {
  EstateInterface,
  InvestEstateInterface,
} from "@/Interface/EstateInterface";
import SingleInvestEstateCard from "./SingleInvestEstateCard";

const InvestEstateCardsListing: React.FC<EstateCardsInterface> = ({
  estates,
  buttonTitle = "View All Properties",
}) => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center w-full lg:px-50 md:px-13 px-5 ">
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 min-w-full  px-3 gap-8 ">
        {estates?.map((e: any, index: number) => (
          <div key={index} className="rounded-2xl">
            <ScrollAnimation>
              <SingleInvestEstateCard estate={e} />
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

export default InvestEstateCardsListing;
