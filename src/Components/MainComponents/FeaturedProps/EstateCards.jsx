import React, { useEffect, useRef, useState } from "react";
import CardImageArea from "../../Molecule/CardImageArea";
import CardBodyArea from "../../Molecule/CardBodyArea";
import { MdArrowOutward } from "react-icons/md";
import ViewButtonAtom from "../../Atoms/ViewButtonAtom";
import SingleCard from "../../Molecule/EstateCards/SingleCard";
import ScrollAnimation from "../../../Animation/ScrollAnimation";

const EstateCards = ({ estates }) => {
  return (
    <div className="min-w-full">
      {estates ? (
        <div className=" flex flex-col items-center w-full">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1   gap-8">
            {estates.map((e, index) => (
              <div key={e.id} className="rounded-2xl">
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
      ) : (
        <p className="text-gray-600 font-bold">
          not estates available at the moment
        </p>
      )}
    </div>
  );
};

export default EstateCards;
