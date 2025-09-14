import React, { useState } from "react";
import GrayHeader from "../../Atoms/GrayHeader";
import PriceSelect from "../../Atoms/PriceSelect";
import SingleCheckBox from "../../Atoms/SingleCheckBox";
import SalaryRangeSelector from "./SalaryRangeSelector";
import InputGray from "../../Atoms/InputGray";
import SmallTitle from "../../Atoms/SmallTitle";

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

const MoreFilters = () => {
  const [selectedHOA, setSelectedHOA] = useState<string>("Any");
  const [selectedListingType, setSelectedListingType] = useState<any>([]);
  const [selectedStatus, setSelectedStatus] = useState<any>([]);
  const [selectedTours, setSelectedTours] = useState([]);
  const [selectedParkingSpot, setSelectedParkingSpot] = useState("any");

  const [selectedAminities, setSelectedAminities] = useState([]);
  const [minSqrFeet, setMinSqrFeet] = useState("no Min");
  const [maxSqrFeet, setMaxSqrFeet] = useState("no Max");
  const [selectedOption, setSelectedOption] = useState("");
  const lotSize = ["any", 50, 100, 150, 200, 300];

  const sqrFeet = ["any", 500, 1000, 1500, 2000, 2500, 3000];
  const [minLotSize, setMinLotSize] = useState("no Min");
  const [maxLotSize, setMaxLotSize] = useState("no Max");

  const [selectedView, setSelectedView] = useState([]);

  const [minYearBuilt, setMinYearBuilt] = useState("any");
  const [maxYearBuilt, setMaxYearBuilt] = useState("any");

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

  const tours: string[] = [
    "Must have open house",
    "Must have 3D tour",
    "Must have Showcase",
  ];

  const otherAminities: string[] = [
    "Must Have AC",
    "Must Have Pool",
    "Water Front",
  ];

  const viewList: string[] = ["City", "Mountain", "Park", "Water"];

  const toggleSelection = (setter: any) => (option: any) => {
    setter((prev: any) =>
      prev.includes(option)
        ? prev.filter((o: any) => o !== option)
        : [...prev, option]
    );
  };

  return (
    <div className="flex flex-col gap-2 mt-3 fixed bg-white border border-gray-300 rounded-lg shadow-2xl w-[400px] max-h-[70vh] overflow-y-auto right-70">
      <GrayHeader header={"More Filter"} />

      <PriceSelect
        title={"Max HOA"}
        onChange={(e: any) => setSelectedHOA(e.target.value)}
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

      <PriceSelect
        title={"Parking Spots"}
        onChange={(e: any) => setSelectedParkingSpot(e.target.value)}
        list={parkingSpots}
        value={selectedParkingSpot}
      />

      <SingleCheckBox text={"Must have garage"} />

      <div className="px-4">
        <SalaryRangeSelector
          value1={minSqrFeet}
          value2={maxSqrFeet}
          serValue1={setMinSqrFeet}
          setValue2={setMaxSqrFeet}
          list1={sqrFeet}
          list2={sqrFeet}
          title1={"Square feet"}
          default1={"no Min"}
          default2={"no Max"}
          noPrice={true}
        />
        <SalaryRangeSelector
          value1={minLotSize}
          value2={maxLotSize}
          serValue1={setMinLotSize}
          setValue2={setMaxLotSize}
          list1={lotSize}
          list2={lotSize}
          title1={"Lot Size"}
          default1={"no Min"}
          default2={"no Max"}
          noPrice={true}
        />

        <div className="flex  gap-4 items-center mb-3 ">
          {/* Min Salary */}
          <div className="flex flex-col ">
            <SmallTitle title={"Year Built"} />
            <InputGray type={"text"} placeholder={"no Min"} />
          </div>
          <span className="mt-5">-</span>
          {/* Max Salary */}
          <div className={`flex flex-col mt-6`}>
            <InputGray type={"text"} placeholder={"no Max"} />
          </div>
        </div>
      </div>
      <SmallTitle title={"Basement"} />
      <SingleCheckBox text={"Has Basement"} />

      <SmallTitle title={"Number of stories"} />
      <SingleCheckBox text={"Single story only"} />

      <SmallTitle title={"+55 communities"} />
      <div className="flex flex-col gap-2 px-4 text-gray-600">
        <label className="flex items-center gap-2 cursor-pointer ">
          <input
            type="radio"
            name="paymentOption"
            value="include"
            checked={selectedOption === "include"}
            onChange={(e) => setSelectedOption(e.target.value)}
            className="accent-blue-500"
          />
          <span>Include</span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="paymentOption"
            value="dontShow"
            checked={selectedOption === "dontShow"}
            onChange={(e) => setSelectedOption(e.target.value)}
            className="accent-blue-500"
          />
          <span>Don't Show</span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="paymentOption"
            value="onlyShow"
            checked={selectedOption === "onlyShow"}
            onChange={(e) => setSelectedOption(e.target.value)}
            className="accent-blue-500"
          />
          <span>Only Show</span>
        </label>
      </div>

      <CheckboxGroup
        title="Other Aminities"
        options={otherAminities}
        selected={selectedAminities}
        onToggle={toggleSelection(setSelectedAminities)}
      />

      <CheckboxGroup
        title="View"
        options={viewList}
        selected={selectedView}
        onToggle={toggleSelection(setSelectedView)}
      />

      <SmallTitle title={"Commute Time"} />
      <div className="px-4">
        <InputGray
          type={"text"}
          placeholder={"Enter Adress,City,State and ZIP code"}
        />
      </div>
    </div>
  );
};

export default MoreFilters;
