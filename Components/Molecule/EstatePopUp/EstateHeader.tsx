import React, { Dispatch, SetStateAction } from "react";
import IconWithText from "../../Atoms/IconWithText";

const EstateHeader: React.FC<{
  onClose: any;
  imagesOpen: boolean;
  setImagesOpen: Dispatch<SetStateAction<boolean>>;
}> = ({ onClose, imagesOpen = false, setImagesOpen }) => {
  return (
    <div className="w-full p-4 bg-white sticky top-0 z-10 border-b">
      <div className="grid grid-cols-3 items-center">
        {/* Left side */}
        <div className="flex items-center">
          {imagesOpen ? (
            <button
              onClick={() => setImagesOpen(false)}
              className="text-md text-blue-500 hover:underline"
            >
              {"<"} Back to Estate Info
            </button>
          ) : (
            <button
              onClick={() => onClose(null)}
              className="text-md text-blue-500 hover:underline"
            >
              {"<"} Back to search
            </button>
          )}
        </div>

        {/* Center */}
        <h1 className="text-2xl font-bold text-gray-600 flex justify-center">
          LOGO
        </h1>

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
