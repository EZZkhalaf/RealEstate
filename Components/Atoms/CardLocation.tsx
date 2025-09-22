import React from "react";
import { CiLocationOn } from "react-icons/ci";

interface CardLocationInterface {
  location: string;
  isSmall?: string;
}
const CardLocation: React.FC<CardLocationInterface> = ({
  location,
  isSmall = "",
}) => {
  return (
    <p className={`flex items-center gap-2 text-gray-400 ${isSmall}`}>
      <CiLocationOn /> {location}
    </p>
  );
};

export default CardLocation;
