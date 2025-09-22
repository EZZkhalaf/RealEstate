import React, { useEffect, useRef, useState } from "react";

import EstateCardsListing from "../../Molecule/EstateCards/EstateCardsListing";
import { EstateInterface } from "@/Interface/EstateInterface";

export interface EstateCardsInterface {
  estates: EstateInterface[];
  buttonTitle?: string;
}

const InvestEstatesCards: React.FC<EstateCardsInterface> = ({
  estates = [],
  buttonTitle = "View All Properties",
}) => {
  return (
    <div className="min-w-full  lg:px-20  px-5">
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

export default InvestEstatesCards;
