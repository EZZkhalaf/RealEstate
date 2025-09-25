

import React from "react";
import Image from "next/image";
import IconWithText from "../../Atoms/IconWithText";
import { Icon } from "@iconify/react";
import Status from "../../Atoms/Status";

interface EstateImagesInterface {
  images?: { directus_files_id: string }[];
  setImagesOpen?: any;
}

const EstateImages: React.FC<EstateImagesInterface> = ({
  images = [],
  setImagesOpen,
}) => {
  if (!images.length) return null;

  return (
    <div className="flex w-full lg:gap-1 h-[50vh] mb-5">
      {/* Main image */}
      {images[0] && (
        <div className="relative flex-[2] h-full">
          <Image
            src={`http://localhost:8055/assets/${images[0].directus_files_id}`}
            alt="estate"
            fill
            sizes="(max-width: 768px) 100vw, 
         (max-width: 1200px) 50vw, 
         33vw"
            className="object-cover rounded hover:brightness-75 transition duration-300"
          />
          <div className="absolute top-2 left-2 bg-gray-200 bg-opacity-60 text-black px-3 py-1 rounded text-sm">
            <Status isActive={true} />
          </div>
        </div>
      )}

      {/* Second column */}
      <div className="hidden lg:flex flex-1 flex-col gap-1 h-full">
        {images?.slice(1, 3).map((img, idx) => (
          <div key={idx} className="relative flex-1">
            <Image
              src={`http://localhost:8055/assets/${img.directus_files_id}`}
              alt={`estate-${idx + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 
         (max-width: 1200px) 50vw, 
         33vw"
              className="object-cover rounded hover:brightness-75 transition duration-300"
            />
          </div>
        ))}
      </div>

      {/* Third column */}
      <div className="hidden lg:flex flex-1 flex-col gap-1 h-full">
        {images?.slice(3, 5).map((img, idx, arr) => (
          <div key={idx} className="relative flex-1">
            <Image
              src={`http://localhost:8055/assets/${img.directus_files_id}`}
              alt={`estate-${idx + 3}`}
              fill
              sizes="(max-width: 768px) 100vw, 
         (max-width: 1200px) 50vw, 
         33vw"
              className="object-cover rounded hover:brightness-75 transition duration-300"
            />
            {idx === arr.length - 1 && (
              <button
                onClick={() => setImagesOpen(true)}
                className="absolute bottom-2 right-2 bg-gray-200 bg-opacity-60 text-black px-3 py-1 rounded text-sm mb-5"
              >
                <IconWithText
                  icon={"view-grid"}
                  text={`View All ${images?.length || ""} Images`}
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
