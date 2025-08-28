import React from "react";
import { CiLocationOn } from "react-icons/ci";
import FeatureElement from "../Atoms/FeatureElement";
import CardTitle from "../Atoms/CardTitle";
import CardLocation from "../Atoms/CardLocation";
import ButtonCustomize from "../Atoms/ButtonCustomize";

const FeatureElementListing = ({ estate }) => {
  return (
    <div className="flex flex-row gap-3 mt-3">
      {estate.features.slice(0, 3).map((e, index) => (
        <FeatureElement key={index} text={e} />
      ))}
    </div>
  );
};

const CardBodyButtons = () => {
  return (
    <div className="flex text-2xl  gap-2 w-full pt-3">
      <ButtonCustomize
        text="View Details"
        color="#D1D5DB"
        hoverColor="#0B3557E6"
        textColor="#000000"
        hoverTextColor="#FFFFFF"
      />

      <ButtonCustomize
        text="Contact Agent"
        color="#0B3557"
        hoverColor="#0B355780"
        textColor="#FFFFFF"
        hoverTextColor="#FFFFFF"
      />
    </div>
  );
};

const CardBodyArea = ({ estate }) => {
  return (
    <div>
      <div className="flex flex-col  px-4 py-6 rounded-lg transform transition-transform duration-300 ">
        <CardTitle title={estate.title} />
        <CardLocation location={estate.location} />
        <div className="flex items-center gap-4 text-gray-600 mt-2 text-sm">
          <p>{estate.beds} beds</p>
          <p>{estate.baths} baths</p>
          <p>{estate.area}</p>
        </div>

        <FeatureElementListing estate={estate} />

        <CardBodyButtons />
      </div>
    </div>
  );
};

export default CardBodyArea;
