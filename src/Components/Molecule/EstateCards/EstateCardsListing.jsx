import React from "react";
import ScrollAnimation from "../../../Animation/ScrollAnimation";
import ViewButtonAtom from "../../Atoms/ViewButtonAtom";
import SingleCard from "./SingleCard";

const EstateCardsListing = ({ estates }) => {
  return (
    <div className=" flex flex-col items-center w-full">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1   gap-8">
        {estates.map((e, index) => (
          <div key={index} className="rounded-2xl">
            <ScrollAnimation key={index}>
              <SingleCard estate={e} key={index} />
            </ScrollAnimation>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <ScrollAnimation>
          <ViewButtonAtom
            title={"View All Properties"}
            navigateTo={"any url"}
            color={"#FFFFFF"}
            hoverColor={"#0B3557"}
            textColor={"#0B3557"}
            hoverTextColor={"#FFFFFF"}
          />
        </ScrollAnimation>
      </div>
    </div>
  );
};

export default EstateCardsListing;
