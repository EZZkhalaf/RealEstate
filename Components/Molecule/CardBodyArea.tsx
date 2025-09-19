import React from "react";
import { CiLocationOn } from "react-icons/ci";
import FeatureElement from "../Atoms/FeatureElement";
import CardTitle from "../Atoms/CardTitle";
import CardLocation from "../Atoms/CardLocation";
import ButtonCustomize from "../Atoms/ButtonCustomize";
import { EstateInterface } from "@/Interface/EstateInterface";

interface CardBodyInterface {
  estate: EstateInterface;
  viewDetailsClick?: (e: any) => void;
}

const FeatureElementListing: React.FC<{ estate: EstateInterface }> = ({
  estate,
}) => {
  return (
    <div className="flex flex-row gap-3 mt-3">
      {estate.features.slice(0, 3).map((e: string, index: number) => (
        <FeatureElement key={index} text={e} />
      ))}
    </div>
  );
};

const CardBodyButtons: React.FC<{ viewDetailsClick: (e: any) => void }> = ({
  viewDetailsClick,
}) => {
  return (
    <div className="flex text-2xl  gap-2 w-full pt-3">
      <ButtonCustomize
        text="View Details"
        onClick={viewDetailsClick}
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

const CardBodyArea: React.FC<CardBodyInterface> = ({
  estate,
  viewDetailsClick,
}) => {
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

        <CardBodyButtons viewDetailsClick={viewDetailsClick} />
      </div>
    </div>
  );
};

export default CardBodyArea;
