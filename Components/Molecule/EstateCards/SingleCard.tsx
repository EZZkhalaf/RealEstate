import { useState } from "react";
import CardBodyArea from "../CardBodyArea";
import { EstateInterface } from "@/Interface/EstateInterface";
import CardImageArea from "../CardImageArea";
import { useRouter } from "next/navigation";

interface SingleCardInterface {
  estate: EstateInterface;
}

const SingleCard: React.FC<SingleCardInterface> = ({ estate }) => {
  const [imageHover, setImageHover] = useState<boolean>(false);
  const router = useRouter();
  return (
    <div className="flex flex-col w-full rounded-lg shadow-2xl group transform transition-transform duration-300 hover:scale-102">
      <CardImageArea
        estate={estate}
        imageHover={imageHover}
        setImageHover={setImageHover}
      />
      <CardBodyArea
        estate={estate}
        viewDetailsClick={() => router.push("/properties")}
        // imageHover={imageHover}
        // setImageHover={setImageHover}
      />
    </div>
  );
};

export default SingleCard;
