import React, { useState } from "react";
import GrayHeader from "../../Atoms/GrayHeader";
import PriceSelect from "../../Atoms/PriceSelect";
import SingleCheckBox from "../../Atoms/SingleCheckBox";
import SalaryRangeSelector from "./SalaryRangeSelector";
import InputGray from "../../Atoms/InputGray";
import SmallTitle from "../../Atoms/SmallTitle";
import { FiltersInterface } from "@/Components/MainComponents/PropertiesPage/SearchFilterEstates";

interface CheckboxGroupInterface {
  title: string;
  options: any;
  selected: any;
  onToggle: any;
}

// Reusable checkboxes with show more/less
const CheckboxGroup: React.FC<CheckboxGroupInterface> = ({
  title,
  options,
  selected,
  onToggle,
}) => {
  const [showMore, setShowMore] = useState(false);

  const visibleOptions = showMore ? options : options.slice(0, 4);

  return (
    <div className="flex flex-col gap-2  py-3">
      <SmallTitle title={title} />
      {visibleOptions.map((option: any) => (
        <label
          key={option}
          className="flex px-4 items-center gap-3 cursor-pointer select-none"
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
          className="mt-1 px-4 text-blue-500 hover:underline text-md font-semibold text-left"
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  );
};

interface MoreFiltersInterface {
  value: FiltersInterface["otherFilters"];
  onChange: (value: FiltersInterface["otherFilters"]) => void;
}

const MoreFilters: React.FC<MoreFiltersInterface> = ({ value, onChange }) => {
  const HOA: number[] = [0, 50, 100, 200, 300, 400, 500, 600];

  const parkingSpots: number[] = [1, 2, 3, 4, 5];
  const listingType: string[] = [
    "Owner posted",
    "Agent listed",
    "New construction",
    "Foreclosures",
    "Auctions",
    "Foreclosed",
    "Pre-foreclosured",
  ];

  const propertStatus: string[] = [
    "Coming-Soon",
    "Accepting backup offers",
    "pending & under contract",
  ];

  const viewList: string[] = ["City", "Mountain", "Park", "Water"];

  return (
    <div className="flex flex-col gap-2 mt-3 fixed bg-white border border-gray-300 rounded-lg shadow-2xl w-[400px] max-h-[70vh] overflow-y-auto right-0 md:r lg:right-110">
      <GrayHeader header={"More Filter"} />

      <PriceSelect
        title={"Max HOA"}
        onChange={(e: any) => onChange({ ...value, maxHOA: +e.target.value })}
        list={HOA}
        value={value?.maxHOA || "Any"}
        HOA={true}
      />

      <CheckboxGroup
        title="Listing Type"
        options={listingType}
        selected={value?.listingType || []}
        onToggle={(option: any) => {
          const newSelection = value?.listingType?.includes(option)
            ? value.listingType.filter((o: any) => o !== option)
            : [...(value?.listingType || []), option];
          onChange({ ...value, listingType: newSelection });
        }}
      />

      <CheckboxGroup
        title="Property Status"
        options={propertStatus}
        selected={value?.propertyStatus || []}
        onToggle={(option: any) => {
          const newSelection = value?.propertyStatus?.includes(option)
            ? value?.propertyStatus?.filter((o: any) => o !== option)
            : [...(value?.propertyStatus || []), option];
          onChange({ ...value, propertyStatus: newSelection });
        }}
      />

      <PriceSelect
        title={"Parking Spots"}
        list={parkingSpots}
        value={value?.parkingSpots || "any"}
        onChange={(e: any) =>
          onChange({ ...value, parkingSpots: +e.target.value })
        }
      />

      <SingleCheckBox
        value={value?.mustHaveGarage || false}
        onChange={(checked) =>
          onChange({ ...value, mustHaveGarage: !value?.mustHaveGarage })
        }
        text={"Must have garage"}
      />

      <SmallTitle title={"Basement"} />
      <SingleCheckBox
        text={"Has Basement"}
        checked={value?.hasBasement || false}
        onChange={(checked) =>
          onChange({ ...value, hasBasement: !value?.hasBasement })
        }
      />

      <SmallTitle title={"+55 communities"} />
      <div className="flex flex-col gap-2 px-4 text-gray-600">
        {["include", "dontShow", "onlyShow"].map((opt) => (
          <label key={opt} className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="comms55"
              value={opt}
              checked={value?.comms55 === opt}
              onChange={() => onChange({ ...value, comms55: opt })}
              className="accent-blue-500"
            />
            <span>
              {opt === "include"
                ? "Include"
                : opt === "dontShow"
                ? "Don't Show"
                : "Only Show"}
            </span>
          </label>
        ))}
      </div>

      <CheckboxGroup
        title="View"
        options={viewList}
        selected={value?.view || []}
        onToggle={(option: string) => {
          const newSelection = value?.view?.includes(option)
            ? value.view.filter((o) => o !== option)
            : [...(value?.view || []), option];
          onChange({ ...value, view: newSelection });
        }}
      />

      <SmallTitle title={"Commute Time"} />
      <div className="px-4">
        <InputGray
          type={"text"}
          value={value?.certainLLocation || ""}
          onChange={(e) =>
            onChange({ ...value, certainLLocation: e.target.value })
          }
          placeholder={"Enter Adress,City,State and ZIP code"}
        />
      </div>
    </div>
  );
};

export default MoreFilters;
