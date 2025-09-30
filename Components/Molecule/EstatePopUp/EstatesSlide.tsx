"use client";
import React, { useState } from "react";
import { EstateInterface } from "@/Interface/EstateInterface";
import SingleCard from "../EstateCards/SingleCard";

const EstatesSlide: React.FC<{
  estates?: EstateInterface[];
  setSelectedEstate: any;
}> = ({ estates = [], setSelectedEstate }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const estatesPerSlide: number = 3;

  const visibleEstates = estates.slice(
    currentIndex,
    currentIndex + estatesPerSlide
  );

  return (
    <div className="relative w-full flex flex-col items-center">
      {/* Cards */}
      <div className="lg:flex  sm:grid-cols-1 sm:grid md:grid md:grid-cols-2 gap-2 overflow-hidden w-full justify-center">
        {visibleEstates.map((estate: EstateInterface, index: number) => (
          <SingleCard
            estate={estate}
            key={index}
            setSelectedEstate={() => setSelectedEstate(estate)}
          />
        ))}
      </div>
    </div>
  );
};

export default EstatesSlide;
