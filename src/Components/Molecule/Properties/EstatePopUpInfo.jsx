import React from "react";
import EstateHeader from "../EstatePopUp/EstateHeader";
import EstateImages from "../EstatePopUp/EstateImages";
import EstateProps from "../EstatePopUp/EstateProps";

const EstatePopUpInfo = ({ estate, onClose }) => {
  if (!estate) return null;

  return (
    <div className="fixed inset-0 bg-none bg-opacity-50 flex justify-center items-center z-1000 ">
      <div className="bg-white  px-0 rounded-lg shadow-lg relative w-[60vw]  h-[100vh] max-h-[100vh]  overflow-auto">
        <EstateHeader onClose={onClose} />

        <div className="flex flex-col px-4">
          <EstateImages id={estate.id} images={estate.image} />

          <div className="grid grid-cols-[3fr_1fr] gap-2">
            <EstateProps estate={estate} />
            <button>Contact Agent</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstatePopUpInfo;
