import React, { useState } from "react";
import CardImageArea from "../CardImageArea";
import CardBodyArea from "../CardBodyArea";
import { SingleEstateEelementInterface } from "@/Interface/EstateInterface";

const SingleEstateEelement: React.FC<SingleEstateEelementInterface> = ({
  estate,
  viewDetailsClick,
}) => {
  const [imageHover, setImageHover] = useState<boolean>(false);
  return (
    <div className="flex flex-col w-full rounded-lg shadow-2xl group transform transition-transform duration-300 hover:scale-102">
      <CardImageArea
        estate={estate}
        imageHover={imageHover}
        setImageHover={setImageHover}
      />
      <CardBodyArea
        estate={estate}
        viewDetailsClick={viewDetailsClick}
        // imageHover={imageHover}
        // setImageHover={setImageHover}
      />
    </div>
  );
};

export default SingleEstateEelement;
