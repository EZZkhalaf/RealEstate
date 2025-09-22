import { InvestEstateInterface } from "@/Interface/EstateInterface";
import React, { useState } from "react";

import InvestEstateImageArea from "./InvestEstateImageArea";
import InvestEstateBody from "./InvestEstateBody";

const SingleInvestEstateCard: React.FC<{ estate: InvestEstateInterface }> = ({
  estate,
}) => {
  console.log(estate);
  const [imageHover, setImageHover] = useState<boolean>(false);
  return (
    <div className="flex flex-col w-full rounded-lg shadow-2xl group transform transition-transform duration-300 hover:scale-102">
      <InvestEstateImageArea
        estate={estate}
        imageHover={imageHover}
        setImageHover={setImageHover}
      />
      <InvestEstateBody estate={estate} viewDetailsClick={() => null} />
    </div>
  );
};

export default SingleInvestEstateCard;
