import React, { useState } from "react";
import GrayHeader from "../../Atoms/GrayHeader";
import PriceSelect from "../../Atoms/PriceSelect";

// Reusable checkboxes with show more/less
const CheckboxGroup = ({ title, options, selected, onToggle }) => {
  const [showMore, setShowMore] = useState(false);

  const visibleOptions = showMore ? options : options.slice(0, 4);

  return (
    <div className="flex flex-col gap-2 px-4 py-3">
      <p className="font-semibold text-gray-600">{title}</p>

      {visibleOptions.map((option) => (
        <label
          key={option}
          className="flex items-center gap-3 cursor-pointer select-none"
        >
          <input
            type="checkbox"
            checked={selected.includes(option)}
            onChange={() => onToggle(option)}
            className="w-5 h-5 accent-blue-500"
          />
          <span className="text-lg text-gray-400">{option}</span>
        </label>
      ))}

      {options.length > 4 && (
        <button
          onClick={() => setShowMore(!showMore)}
          className="mt-1 text-blue-500 hover:underline text-md font-semibold text-left"
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  );
};

const MoreFilters = () => {
  const [selectedHOA, setSelectedHOA] = useState("Any");
  const [selectedListingType, setSelectedListingType] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState([]);
  const [selectedTours, setSelectedTours] = useState([]);

  const HOA = [0, 50, 100, 200, 300, 400, 500, 600];

  const listingType = [
    "Owner posted",
    "Agent listed",
    "New construction",
    "Foreclosures",
    "Auctions",
    "Foreclosed",
    "Pre-foreclosured",
  ];

  const propertStatus = [
    "Coming-Soon",
    "Accepting backup offers",
    "pending & under contract",
  ];

  const tours = [
    "Must have open house",
    "Must have 3D tour",
    "Must have Showcase",
  ];

  const toggleSelection = (setter) => (option) => {
    setter((prev) =>
      prev.includes(option)
        ? prev.filter((o) => o !== option)
        : [...prev, option]
    );
  };

  return (
    <div className="flex flex-col mt-3 fixed bg-white border border-gray-300 rounded-lg shadow-2xl w-[25vw]">
      <GrayHeader header={"More Filter"} />

      <PriceSelect
        title={"Max HOA"}
        onChange={(e) => setSelectedHOA(e.target.value)}
        list={HOA}
        value={selectedHOA}
        HOA={true}
      />

      {/* Groups with show more/less */}
      <CheckboxGroup
        title="Listing Type"
        options={listingType}
        selected={selectedListingType}
        onToggle={toggleSelection(setSelectedListingType)}
      />

      <CheckboxGroup
        title="Property Status"
        options={propertStatus}
        selected={selectedStatus}
        onToggle={toggleSelection(setSelectedStatus)}
      />

      <CheckboxGroup
        title="Tours"
        options={tours}
        selected={selectedTours}
        onToggle={toggleSelection(setSelectedTours)}
      />
    </div>
  );
};

export default MoreFilters;
