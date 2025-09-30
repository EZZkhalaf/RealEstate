import React, { Dispatch, SetStateAction } from "react";
import IconWithText from "../../Atoms/IconWithText";
import Image from "next/image";

const EstateHeader: React.FC<{
  onClose: any;
  imagesOpen: boolean;
  setImagesOpen: Dispatch<SetStateAction<boolean>>;
}> = ({ onClose, imagesOpen = false, setImagesOpen }) => {
  return (
    <div className="w-full p-4 bg-white sticky top-0 z-10 border-b border-gray-200 mb-3">
      <div className="flex items-center justify-between">
        {/* Left side */}
        <div className="flex items-center">
          {imagesOpen ? (
            <button
              onClick={() => setImagesOpen(false)}
              className="text-md text-blue-500 hover:underline"
            >
              {"<"} Back
            </button>
          ) : (
            <button
              onClick={() => onClose(null)}
              className="text-md text-blue-500 hover:underline"
            >
              {"<"} Back
            </button>
          )}
        </div>

        {/* Center logo */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/assets/Group.png"
            width={80}
            height={80}
            alt="Logo"
            className="object-contain"
          />
        </div>

        {/* Right side */}
        <div className="flex gap-2 justify-end">
          <IconWithText icon={"heart"} text={"Save"} />
          <IconWithText icon={"share-variant"} text={"Share"} />
          <IconWithText icon={"eye-off-outline"} text={"Hide"} />
          <IconWithText icon={"dots-vertical"} text={"More"} />
        </div>
      </div>
    </div>
  );
};

export default EstateHeader;
