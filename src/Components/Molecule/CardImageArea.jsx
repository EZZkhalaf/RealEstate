import React from "react";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";

const CardImageArea = ({
  estate,
  imageHover,
  setImageHover,
  slides = false,
}) => {
  return (
    <div
      style={{
        backgroundImage: `url(${estate.image[2]}) `,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "224px",
        width: "full",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "0",
      }}
      className={`rounded-lg transform transition-transform duration-300  `}
    >
      <div className="flex justify-between p-2">
        <div className="bg-[#0B3557] rounded-lg flex items-center">
          <p className="text-white text-sm font-semibold  px-2">
            {estate.type}
          </p>
        </div>
        <div className="flex flex-row gap-1 px-2">
          <button className="bg-gray-300 rounded-full p-1 hover:bg-white">
            <CiHeart />
          </button>
          <button className="hover:bg-white rounded-full p-1 bg-gray-300">
            <IoEyeOutline />
          </button>
        </div>
      </div>
      <div className="p-2">
        <div
          className="mb-3 bg-white p-2 rounded-lg"
          style={{ justifySelf: "flex-start" }}
        >
          <p className="  text-blue-900 font-bold">{estate.price}</p>
        </div>
      </div>
    </div>
  );
};

export default CardImageArea;
