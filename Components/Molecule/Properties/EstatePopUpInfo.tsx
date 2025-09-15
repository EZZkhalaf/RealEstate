"use client";

import React, { useEffect, useState } from "react";
import EstateHeader from "../EstatePopUp/EstateHeader";
import EstateImages from "../EstatePopUp/EstateImages";
import EstateProps from "../EstatePopUp/EstateProps";
import EstateAllImages from "../EstatePopUp/EstateAllImages";
import { EstateInterface } from "../../FeaturedProp";
import { getStaticSingleEstate } from "@/API/EstatesApi";

interface ContactAgentButtonsInterface {
  onlyContact?: boolean;
}

interface EstatePopUpInfoInterface {
  estate_id: any;
  onClose: any;
}
export const ContactAgentButtons: React.FC<ContactAgentButtonsInterface> = ({
  onlyContact = false,
}) => {
  return (
    <div className="lg:sticky lg:top-20 lg:px-2 fixed bottom-0 bg-gray-200 mt-3 flex justify-center items-center md:border-t sm:border-t border-gray-200 h-fit w-full">
      <div className="lg:flex lg:flex-col flex flex-row  md:grid md:grid-cols-2 justify-center items-center gap-3 rounded-lg p-2 lg:border   border-gray-300 w-full">
        {!onlyContact && (
          <button className="flex flex-col bg-blue-500 border border-blue-600 hover:bg-blue-600 transform duration-300 py-2 px-15 rounded-md">
            <div>
              <p className="flex flex-col items-center text-white font-bold text-md lg:text-lg">
                Request a tour
              </p>
              <p className="text-xs text-white">as early as today at 10am</p>
            </div>
          </button>
        )}
        <button className="bg-white hover:bg-gray-200 border border-blue-600 flex justify-center transform duration-300 py-4 lg:py-2 px-15 rounded-md">
          <p className="flex text-blue-600 font-bold text-md lg:text-lg">
            Contact Agent
          </p>
        </button>
      </div>
    </div>
  );
};
const EstatePopUpInfo: React.FC<EstatePopUpInfoInterface> = ({
  estate_id,
  onClose,
}) => {
  if (!estate_id) return null;
  const [imagesOpen, setImagesOpen] = useState<boolean>(false);
  const [estate, setEstate] = useState<any>(null);
  const fetchEstate = async () => {
    const response = await getStaticSingleEstate(estate_id);
    const estateData = Array.isArray(response) ? response[0] : response;
    // setEstate({
    //   ...estateData,
    //   features: estateData.features ? JSON.parse(estateData.features) : [],
    //   image: estateData.image ? JSON.parse(estateData.image) : [],
    //   special_props: estateData.special_props
    //     ? JSON.parse(estateData.special_props)
    //     : [],
    //   stats: estateData.stats ? JSON.parse(estateData.stats) : {},
    //   listing_info: estateData.listing_info
    //     ? JSON.parse(estateData.listing_info)
    //     : {},
    // });
    setEstate(estateData);
  };
  useEffect(() => {
    if (estate_id) fetchEstate();
  }, [estate_id]);

  console.log(estate);
  return (
    <div className="fixed inset-0 bg-none bg-opacity-50 flex justify-center items-center z-1000 ">
      <div className="bg-white  px-0 rounded-lg shadow-lg relative lg:w-[60vw] lg:max-w-[60vw] w-[100vw] max-w-[100vw] h-[100vh] max-h-[100vh]  overflow-auto">
        <EstateHeader onClose={onClose} />

        {imagesOpen ? (
          <EstateAllImages
            images={estate.image}
            setImagesOpen={setImagesOpen}
          />
        ) : (
          <div className="flex flex-col px-4">
            <EstateImages
              images={estate?.image || []}
              setImagesOpen={setImagesOpen}
            />

            <div className="lg:grid lg:grid-cols-[2fr_1fr]  flex flex-col items-start justify-center gap-2 w-full">
              <EstateProps estate={estate} />
              <ContactAgentButtons />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EstatePopUpInfo;
