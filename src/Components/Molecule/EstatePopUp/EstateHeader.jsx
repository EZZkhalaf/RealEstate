import React from "react";
import IconWithText from "../../Atoms/IconWithText";

const EstateHeader = ({ onClose }) => {
  return (
    <div className="grid grid-cols-3 w-full p-4  bg-white sticky top-0 mt-0 z-10">
      <button
        onClick={() => onClose(null)}
        className="flex  text-md text-blue-500 hover:underline"
      >
        {"<"} Back to search
      </button>

      <h1 className="text-2xl font-bold text-gray-600 flex justify-center">
        LOGO
      </h1>

      <div className="flex gap-2 justify-end">
        <IconWithText icon={"heart"} text={"Save"} />
        <IconWithText icon={"share-variant"} text={"Share"} />
        <IconWithText icon={"eye-off-outline"} text={"Hide"} />
        <IconWithText icon={"dots-vertical"} text={"More"} />
      </div>
    </div>
  );
};

export default EstateHeader;
