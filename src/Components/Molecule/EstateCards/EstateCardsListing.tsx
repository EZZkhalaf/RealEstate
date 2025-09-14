import React from "react";
import ScrollAnimation from "../../../Animation/ScrollAnimation";
import ViewButtonAtom from "../../Atoms/ViewButtonAtom";
import SingleCard from "./SingleCard";
import { useNavigate } from "react-router-dom";
import { EstateCardsInterface } from "../../MainComponents/FeaturedProps/EstateCards";
import { EstateInterface } from "../../FeaturedProp";

const EstateCardsListing: React.FC<EstateCardsInterface> = ({
  estates,
  buttonTitle = "View All Properties",
}) => {
  const navigate = useNavigate();
  return (
    <div className=" flex flex-col items-center w-full">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 px-4  gap-8">
        {estates.map((e: EstateInterface, index: number) => (
          <div key={index} className="rounded-2xl">
            <ScrollAnimation key={index}>
              <SingleCard estate={e} key={index} />
            </ScrollAnimation>
          </div>
        ))}
      </div>

      <div onClick={() => navigate("/properties")} className="mt-8">
        <ScrollAnimation>
          <ViewButtonAtom
            title={buttonTitle}
            // navigateTo={"any url"}
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
