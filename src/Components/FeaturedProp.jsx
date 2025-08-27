import React, { useState } from "react";
import ListSelect from "./Atoms/ListSelect";
// import EstateCards from "./MainComponents/Fea/EstateCards";
import estate1 from "../assets/estate1.avif";
import estate2 from "../assets/estate2.avif";
import TitleAtom from "./Atoms/TitleAtom";
import ParagraphDescription from "./Atoms/ParagraphDescription";
import EstateCards from "./MainComponents/FeaturedProps/EstateCards";

const FilterButton = ({ text }) => {
  return (
    <button
      className={`bg-white text-sm hover:bg-gray-300 p-1 rounded-lg border-1 border-gray-300 px-3 `}
    >
      {text}
    </button>
  );
};

const FeaturedProp = () => {
  const [selected, setSelected] = useState();
  const generes = [
    "All Properties",
    "Apartment",
    "Villa",
    "Penthouse",
    "Loft",
    "Compound",
  ];

  const estates = [
    {
      price: "$4,500,000",
      title: "Family Compound in Al Malqa",
      location: "Riyadh, Saudi Arabia",
      beds: 6,
      baths: 5,
      area: "6000 sqft",
      image: estate1,
      features: ["Multiple Villas", "Garden", "Pool"],
      actions: ["View Details", "Contact Agent"],
      type: "compound",
    },
    {
      price: "$3,200,000",
      title: "Luxury Villa in Al Nakheel",
      location: "Riyadh, Saudi Arabia",
      beds: 5,
      baths: 4,
      image: estate2,
      area: "4500 sqft",
      features: ["Garden", "Private Pool", "Garage"],
      actions: ["View Details", "Contact Agent"],
      type: "compound",
    },
    {
      price: "$5,100,000",
      title: "Modern Compound in Al Yasmin",
      location: "Riyadh, Saudi Arabia",
      beds: 7,
      baths: 6,
      image: estate1,
      area: "7000 sqft",
      features: ["Multiple Villas", "Gym", "Pool", "Garden"],
      actions: ["View Details", "Contact Agent"],
      type: "townhouse",
    },
    {
      price: "$2,800,000",
      title: "Elegant Villa in Al Rawdah",
      location: "Riyadh, Saudi Arabia",
      beds: 4,
      baths: 3,
      image: estate2,
      area: "3800 sqft",
      features: ["Garden", "Pool"],
      actions: ["View Details", "Contact Agent"],
      type: "Villa",
    },
    {
      price: "$6,000,000",
      title: "Premium Family Compound in Al Malqa",
      location: "Riyadh, Saudi Arabia",
      beds: 8,
      baths: 7,
      image: estate1,
      area: "8500 sqft",
      features: ["Multiple Villas", "Garden", "Pool", "Tennis Court"],
      actions: ["View Details", "Contact Agent"],
      type: "penthouse",
    },
  ];

  const filterOptions = ["Low to High", "High to Low", "Square Footage"];
  return (
    <div className="w-full  flex flex-col  mt-20 pr-25 pl-25">
      <div className="flex flex-col items-center w-full">
        <TitleAtom title={"Featured Properties"} />

        <ParagraphDescription
          description={
            "Discover exceptional properties in Saudi Arabia's most prestigious locations"
          }
        />
      </div>
      <div className="flex flex-row justify-between mb-7 mt-7 sm:gap-7">
        <div className="flex flex-wrap gap-2 sm:gap-1 md:gap-1 justify-between ">
          {generes.map((b, index) => (
            <FilterButton text={b} key={index} />
          ))}
        </div>

        <div>
          <ListSelect list={filterOptions} />
        </div>
      </div>
      <div className="w-full px-0">
        <EstateCards estates={estates} />
      </div>
    </div>
  );
};

export default FeaturedProp;
