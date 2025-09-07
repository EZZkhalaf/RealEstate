import React from "react";
import ButtonCustomize from "../Components/Atoms/ButtonCustomize";
import { useNavigate } from "react-router-dom";
import inside1 from "../assets/inside1.jpg";
import inside2 from "../assets/inside2.jpg";
import inside3 from "../assets/inside3.jpg";
import inside4 from "../assets/inside4.webp";

const PropertyInfo = () => {
  const navigate = useNavigate();
  const images = [inside1, inside2, inside3, inside4];
  return (
    <div className="flex flex-row gap-2 w-full mt-25">
      {/* <div className="flex flex-col p-10">
        <div className="flex justify-between">
          <ButtonCustomize
            icon="arrow-left"
            text="Back to Properties"
            color="0B3557"
            hoverColor="#0B3557E6"
            textColor="FFFFFF"
            hoverTextColor="FFFFFF"
            rounded="xl"
            padding="2"
            onClick={() => navigate("/properties")}
          />
        </div>
      </div>

      <div className="p-10">
        <div className="bg-gray-400">contact info</div>
      </div> */}
    </div>
  );
};

export default PropertyInfo;
