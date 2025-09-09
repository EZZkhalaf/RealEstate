import React from "react";
import IconWithText from "../../Atoms/IconWithText";

const EstateHeader = ({ onClose }) => {
  return (
    <div className="w-full p-4 bg-white sticky top-0 z-10 border-b">
      <div className="flex flex-col gap-3 lg:grid lg:grid-cols-3 lg:items-center">
        <button
          onClick={() => onClose(null)}
          className="flex text-md text-blue-500 hover:underline order-1 lg:order-none"
        >
          {"<"} Back to search
        </button>

        <h1 className="text-2xl font-bold text-gray-600 flex justify-center order-2">
          LOGO
        </h1>

        {/* Actions */}
        <div className="flex gap-2 justify-between lg:justify-end order-3">
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
