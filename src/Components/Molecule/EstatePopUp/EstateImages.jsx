import React from "react";
import IconWithText from "../../Atoms/IconWithText";
import { Icon } from "@iconify/react";
import Status from "../../Atoms/Status";

const EstateImages = ({ id, images = [] }) => {
  if (!images.length) return null;

  return (
    <div className="flex w-full lg:gap-1">
      {images[0] && (
        <div className="relative w-full h-[60vh] lg:flex-[2]">
          <img
            src={images[0]}
            alt="estate"
            className="w-full h-full  object-cover rounded hover:brightness-75 transform-view duration-300"
          />
          <div className="absolute top-2 left-2 bg-gray-200 bg-opacity-60 text-black px-3 py-1 rounded text-sm ">
            <Status isActive={true} />
          </div>
        </div>
      )}

      <div className=" lg:flex hidden lg:flex-1 lg:gap-1 lg:flex-col">
        {images.slice(1, 3).map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`estate-${idx + 1}`}
            className="flex-1 w-full h-1/2 object-cover rounded hover:brightness-75 transform-view duration-300"
          />
        ))}
      </div>

      <div className=" lg:flex hidden lg:flex-1 lg:gap-1 lg:flex-col">
        {images?.slice(3, 5)?.map((img, idx, arr) => (
          <div key={idx} className="relative flex-1">
            <img
              src={img}
              alt={`estate-${idx + 3}`}
              className="w-full h-full object-cover rounded hover:brightness-75 transform-view duration-300"
            />
            {/* Show button only on the last image */}
            {idx === arr.length - 1 && (
              <button className="absolute bottom-2 right-2 bg-gray-200 bg-opacity-60 text-black px-3 py-1 rounded text-sm">
                <IconWithText
                  icon={"view-grid"}
                  text={`View All ${images.length || ""} Images`}
                  textColor={"text-black"}
                />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EstateImages;
