import React, { useRef, useState } from "react";
import CardImageArea from "../../Molecule/CardImageArea";
import CardBodyArea from "../../Molecule/CardBodyArea";
import { MdArrowOutward } from "react-icons/md";
import ViewButtonAtom from "../../Atoms/ViewButtonAtom";

const SingleCard = ({ estate }) => {
  const [imageHover, setImageHover] = useState(false);
  return (
    <div className="flex flex-col w-full rounded-lg shadow-2xl group transform transition-transform duration-300 hover:scale-102">
      <CardImageArea
        estate={estate}
        imageHover={imageHover}
        setImageHover={setImageHover}
      />
      <CardBodyArea
        estate={estate}
        imageHover={imageHover}
        setImageHover={setImageHover}
      />
    </div>
  );
};

const EstateCards = ({ estates }) => {
  return (
    <div className="min-w-full">
      {estates ? (
        <div className=" flex flex-col items-center">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-8">
            {estates.map((e) => (
              <div key={e.id} className="rounded-2xl">
                <SingleCard estate={e} key={e.id} />
              </div>
            ))}
          </div>

          <div className="mt-8">
            <ViewButtonAtom
              title={"View All Properties"}
              navigateTo={"any url"}
              color={"#FFFFFF"}
              hoverColor={"#0B3557"}
              textColor={"#0B3557"}
              hoverTextColor={"#FFFFFF"}
            />
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
