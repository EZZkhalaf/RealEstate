import EstateCardsListing from "../../Molecule/EstateCards/EstateCardsListing";
import {
  EstateInterface,
  InvestEstateInterface,
} from "@/Interface/EstateInterface";
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
  let slicedInvestEstates: EstateInterface[] | InvestEstateInterface[];
  if (invest) {
    slicedInvestEstates = estates?.slice(0, 6);
  } else slicedInvestEstates = [];

  return (
    <div className=" px-6 ">
      {estates && !invest ? (
        <EstateCardsListing estates={estates} buttonTitle={buttonTitle} />
      ) : (
        <div>
          {estates && invest ? (
            <InvestEstateCardsListing estates={slicedInvestEstates} />
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
