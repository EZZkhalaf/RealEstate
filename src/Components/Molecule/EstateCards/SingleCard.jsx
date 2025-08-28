import { useState } from "react";
import CardBodyArea from "../CardBodyArea";
import CardImageArea from "../CardImageArea";

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

export default SingleCard;
