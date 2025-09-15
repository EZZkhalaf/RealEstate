import React from "react";
import { CiLocationOn } from "react-icons/ci";

interface CardLocationInterface {
  location: string;
}
const CardLocation: React.FC<CardLocationInterface> = ({ location }) => {
  return (
    <p className="flex items-center text-gray-400">
      <CiLocationOn /> {location}
    </p>
  );
};

export default CardLocation;
