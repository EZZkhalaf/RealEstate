import React, { useState } from "react";
import CardImageArea from "../CardImageArea";
import Status from "../../Atoms/Status";
import { EstateInterface } from "@/Interface/EstateInterface";

interface SuggestionCardInterface {
  estate: EstateInterface;
}

const SuggestionCard: React.FC<SuggestionCardInterface> = ({ estate }) => {
  return (
    <div className="flex flex-col w-full  border border-gray-100 rounded-lg  shadow-2xl">
      <CardImageArea estate={estate} hidePrice={true} />
      {/* body */}
      <div className="flex flex-col w-full bg-gray-200 px-2 gap-3 mt-3 pb-3">
        <p className="text-md font-bold mt-2">{estate.price}</p>
        <div className="flex flex-row lg:justify-between  gap-1">
          <div className="flex gap-1">
            <p className="font-bold">{estate.beds}</p>
            bds
          </div>
          |
          <div className="flex gap-1">
            <p className="font-bold">{estate.baths}</p>
            ba
          </div>
          |
          <div className="flex gap-1">
            <p className="font-bold">{estate.beds}</p>
            bds
          </div>
        </div>

        <p className="text-gray-500 text-sm">{estate.location}</p>

        {estate.market_status === "on" ? (
          <Status
            isActive={true}
            activeText={`${estate.market_status} the market`}
          />
        ) : (
          <Status
            isActive={false}
            offlineText={`${estate.market_status} the market`}
          />
        )}
      </div>
    </div>
  );
};

//will be edit later
const EstatesSlide = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const estatesPerSlide: number = 3;

  // const visibleEstates = MockEstates.slice(
  //   currentIndex,
  //   currentIndex + estatesPerSlide
  // );

  return (
    <div className="relative w-full flex flex-col items-center">
      {/* Cards */}
      {/* <div className="lg:flex  sm:grid-cols-1 sm:grid md:grid md:grid-cols-2 gap-2 overflow-hidden w-full justify-center">
        {visibleEstates.map((estate) => (
          <SuggestionCard estate={estate as EstateInterface} key={estate.id} />
        ))}
      </div> */}
    </div>
  );
};

export default EstatesSlide;
