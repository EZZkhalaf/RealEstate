import { Dispatch, SetStateAction, useState } from "react";
import CardBodyArea from "../CardBodyArea";
import { EstateInterface } from "@/Interface/EstateInterface";
import CardImageArea from "../CardImageArea";
import { useRouter } from "next/navigation";

interface SingleCardInterface {
  estate: EstateInterface;
  suggestion?: boolean;
  setSelectedEstate?: Dispatch<SetStateAction<any>>;
}

const SingleCard: React.FC<SingleCardInterface> = ({
  estate,
  suggestion,
  setSelectedEstate,
}) => {
  const [imageHover, setImageHover] = useState<boolean>(false);
  const router = useRouter();
  return (
    <div className="flex flex-col w-full  shadow-2xl group transform transition-transform duration-300  h-fit  hover:scale-102 rounded-lg">
      <CardImageArea
        estate={estate}
        imageHover={imageHover}
        setImageHover={setImageHover}
      />
      <CardBodyArea
        estate={estate}
        viewDetailsClick={
          setSelectedEstate
            ? (e: any) => setSelectedEstate(estate)
            : (e: any) => router.push("/properties")
        }
        // imageHover={imageHover}
        // setImageHover={setImageHover}
      />
    </div>
  );
};

export default SingleCard;
