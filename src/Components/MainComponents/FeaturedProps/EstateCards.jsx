import React, { useEffect, useRef, useState } from "react";
import CardImageArea from "../../Molecule/CardImageArea";
import CardBodyArea from "../../Molecule/CardBodyArea";
import { MdArrowOutward } from "react-icons/md";
import ViewButtonAtom from "../../Atoms/ViewButtonAtom";
import SingleCard from "../../Molecule/EstateCards/SingleCard";
import ScrollAnimation from "../../../Animation/ScrollAnimation";
import EstateCardsListing from "../../Molecule/EstateCards/EstateCardsListing";

const EstateCards = ({ estates, buttonTitle = "View All Properties" }) => {
  return (
    <div className="min-w-full  lg:px-20 md:px-20 px-5">
      {estates ? (
        <EstateCardsListing estates={estates} buttonTitle={buttonTitle} />
      ) : (
        <p className="text-gray-600 font-bold">
          not estates available at the moment
        </p>
      )}
    </div>
  );
};

export default EstateCards;
