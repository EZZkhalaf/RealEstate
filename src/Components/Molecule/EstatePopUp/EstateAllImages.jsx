import React, { useEffect } from "react";
import { ContactAgentButtons } from "../Properties/EstatePopUpInfo";

const EstateAllImages = ({ images = [], setImagesOpen }) => {
  const imagesPerChunck = 3;
  const chuncks = [];
  for (let i = 0; i < images.length; i += imagesPerChunck) {
    chuncks.push(images.slice(i, i + imagesPerChunck));
  }
  return (
    <div className="w-full">
      <div className="flex flex-col gap-2 w-full px-4">
        <button
          onClick={() => setImagesOpen(false)}
          className="flex text-xl p-5  text-gray-500 hover:underline order-1 lg:order-none"
        >
          X
        </button>

        <div className="grid lg:grid-cols-[3fr_1fr] md:grid-cols-[2fr_1fr] grid-cols-1 gap-2">
          <div className="flex flex-col w-full gap-2">
            {chuncks.map((c, indx) => (
              <div key={indx} className="flex flex-col   gap-2 w-full">
                <img
                  src={c[0]}
                  alt="no Image"
                  className="w-full h-90 object-cover rounded"
                />

                <div className="flex   gap-2 w-full">
                  {c[1] && (
                    <img
                      src={c[1]}
                      alt="no Image"
                      className="w-1/2 h-40 object-cover rounded"
                    />
                  )}
                  {c[2] && (
                    <img
                      src={c[2]}
                      alt="no Image"
                      className="w-1/2 h-40 object-cover rounded"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>

          <ContactAgentButtons onlyContact={true} />
        </div>
      </div>
    </div>
  );
};

export default EstateAllImages;
