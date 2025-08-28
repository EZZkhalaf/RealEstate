import React from "react";

const HeroSummaryListing = ({ summary }) => {
  return (
    <>
      {summary.map((element, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center mb-5"
        >
          <p className="text-white text-3xl text-center font-bold mb-2">
            {element.total}
          </p>
          <p className="text-white/80">{element.name}</p>
        </div>
      ))}
    </>
  );
};

export default HeroSummaryListing;
