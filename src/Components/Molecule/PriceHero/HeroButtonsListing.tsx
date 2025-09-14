import React from "react";

interface HeroButtonsListingInterface {
  buttons: string[];
  selected: any;
  setSelected: any;
}

const HeroButtonsListing: React.FC<HeroButtonsListingInterface> = ({
  buttons,
  selected,
  setSelected,
}) => {
  return (
    <div className="flex flex-row rounded-lg p-1  bg-gray-300">
      {buttons.map((b, index) => (
        <button
          key={index}
          onClick={() => setSelected(b)}
          className={`px-6 py-2 rounded-lg transition-colors duration-200 ${
            selected === b
              ? "bg-[#0B3557] text-white"
              : "bg-gray-300 text-gray-700"
          }`}
        >
          {b}
        </button>
      ))}
    </div>
  );
};

export default HeroButtonsListing;
