import React, { useEffect, useRef, useState } from "react";

import EstateCardsListing from "../../Molecule/EstateCards/EstateCardsListing";
import {
  EstateInterface,
  InvestEstateInterface,
} from "@/Interface/EstateInterface";
import Invest from "@/app/invest/page";
import InvestEstateCardsListing from "@/Components/Molecule/InvestEstatesCards/InvestEstateCardsListing";

export interface EstateCardsInterface {
  estates: EstateInterface[] | InvestEstateInterface[];
  buttonTitle?: string;
  invest?: boolean;
}

const EstateCards: React.FC<EstateCardsInterface> = ({
  estates = [],
  buttonTitle = "View All Properties",
  invest = false,
}) => {
  return (
    <div className="min-w-full  lg:px-20  px-5">
      {estates && !invest ? (
        <EstateCardsListing estates={estates} buttonTitle={buttonTitle} />
      ) : (
        <div>
          {estates && invest ? (
            <InvestEstateCardsListing estates={estates} />
          ) : (
            <p className="text-gray-600 font-bold">
              not estates available at the moment
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default EstateCards;
