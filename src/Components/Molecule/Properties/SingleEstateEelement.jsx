import React, { useState } from "react";
import CardImageArea from "../CardImageArea";
import CardBodyArea from "../CardBodyArea";

const SingleEstateEelement = ({ estate }) => {
  const [imageHover, setImageHover] = useState(false);
  return (
    <div className="grid grid-cols-[1fr_2fr] w-full rounded-lg shadow-2xl group transform transition-transform duration-300 hover:scale-102">
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

export default SingleEstateEelement;
