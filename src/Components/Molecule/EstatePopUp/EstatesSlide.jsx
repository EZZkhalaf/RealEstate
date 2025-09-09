import React, { useState } from "react";
import MockEstates from "../../../MockData/MockEstates.json";
import SingleCard from "../EstateCards/SingleCard";
import CardImageArea from "../CardImageArea";
const SuggestionCard = ({ estate }) => {
  return (
    <div className="flex flex-col">
      <CardImageArea estate={estate} />
      {/* body */}
    </div>
  );
};

const EstatesSlide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const estatesPerSlide = 3;

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + estatesPerSlide >= MockEstates.length ? 0 : prev + estatesPerSlide
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev - estatesPerSlide < 0
        ? MockEstates.length -
          (MockEstates.length % estatesPerSlide || estatesPerSlide)
        : prev - estatesPerSlide
    );
  };

  const visibleEstates = MockEstates.slice(
    currentIndex,
    currentIndex + estatesPerSlide
  );

  return (
    <div className="relative w-full flex flex-col items-center">
      {/* Cards */}
      <div className="flex gap-4 overflow-hidden w-full justify-center">
        {visibleEstates.map((estate) => (
          <SingleCard estate={estate} key={estate.id} />
        ))}
      </div>

      {/* Navigation */}
      <div className="flex gap-4 mt-4">
        <button
          onClick={prevSlide}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          Prev
        </button>
        <button
          onClick={nextSlide}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default EstatesSlide;
