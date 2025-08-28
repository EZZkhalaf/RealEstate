import React, { useEffect, useRef, useState } from "react";
import CardImageArea from "../../Molecule/CardImageArea";
import CardBodyArea from "../../Molecule/CardBodyArea";
import { MdArrowOutward } from "react-icons/md";
import ViewButtonAtom from "../../Atoms/ViewButtonAtom";
import SingleCard from "../../Molecule/EstateCards/SingleCard";
import ScrollAnimation from "../../../Animation/ScrollAnimation";
import EstateCardsListing from "../../Molecule/EstateCards/EstateCardsListing";

const EstateCards = ({ estates }) => {
  return (
    <div className="min-w-full">
      {estates ? (
        <EstateCardsListing estates={estates} />
      ) : (
        <p className="text-gray-600 font-bold">
          not estates available at the moment
        </p>
      )}
    </div>
  );
};

export default EstateCards;
