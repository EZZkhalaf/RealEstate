import React from "react";
import { CiLocationOn } from "react-icons/ci";
import FeatureElement from "../Atoms/FeatureElement";
import { ButtonCustomize } from "./AgentCard";

const CardBodyArea = ({ estate }) => {
  return (
    <div>
      <div className="flex flex-col  px-4 py-6 rounded-lg transform transition-transform duration-300 ">
        <h1 className="text-gray-900 font-semibold mb-2  text-xl ">
          {estate.title}
        </h1>
        <p className="flex items-center text-gray-400">
          <CiLocationOn className="" /> {estate.location}
        </p>
        <div className="flex items-center gap-4 text-gray-600 mt-2 text-sm">
          <p>{estate.beds} beds</p>
          <p>{estate.baths} baths</p>
          <p>{estate.area}</p>
        </div>
        <div className="flex flex-row gap-3 mt-3">
          {estate.features.slice(0, 3).map((e) => (
            <FeatureElement text={e} />
          ))}
        </div>

        <div className="flex  gap-2 w-full pt-3">
          <ButtonCustomize
            text="View Details"
            // icon="email"
            color="#D1D5DB"
            hoverColor="#0B3557E6"
            textColor="#000000"
            hoverTextColor="#FFFFFF"
          />
          {/* <button className="text-sm text-white font-bold px-3 bg-[#0B3557] hover:bg-[#0B3557]/50 rounded-lg w-full">
            Contact Agent
          </button> */}
          <ButtonCustomize
            text="Contact Agent"
            // icon="email"
            color="#0B3557"
            hoverColor="#0B355780"
            textColor="#FFFFFF"
            hoverTextColor="#FFFFFF"
          />
        </div>
      </div>
    </div>
  );
};

export default CardBodyArea;
