import React from "react";
import TitleAtom from "../Atoms/TitleAtom";
import ParagraphDescription from "../Atoms/ParagraphDescription";
import ListSelect from "../Atoms/ListSelect";
import estate1 from "../../assets/estate1.avif";
import estate2 from "../../assets/estate2.avif";
import ScrollAnimation from "../../Animation/ScrollAnimation";
import SingleCard from "../Molecule/EstateCards/SingleCard";
import SingleEstateEelement from "../Molecule/Properties/SingleEstateEelement";

const Properties = () => {
  const totalCount = 9002;
  const anyList = ["first", "second", "third"];
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
  return (
    <div className="grid grid-cols-1 gap-4 w-full mb-10 px-30">
      <TitleAtom title={"Search For Properties"} />
      <div className=" flex flex-wrap justify-between items-center w-full ">
        <ParagraphDescription
          description={`${totalCount} Properties for Sale in Saudi`}
        />
        <ListSelect list={anyList} />
      </div>

      <div className="grid grid-cols-1 px-4  gap-8">
        {estates.map((e, index) => (
          <div key={index} className="rounded-2xl">
            <ScrollAnimation key={index}>
              <SingleEstateEelement estate={e} key={index} />
            </ScrollAnimation>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Properties;
