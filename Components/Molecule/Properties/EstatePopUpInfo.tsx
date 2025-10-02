// "use client";

// import React, { useEffect, useState } from "react";
// import EstateHeader from "../EstatePopUp/EstateHeader";
// import EstateImages from "../EstatePopUp/EstateImages";
// import EstateProps from "../EstatePopUp/EstateProps";
// import EstateAllImages from "../EstatePopUp/EstateAllImages";
// import { getSimilarEstates, getStaticSingleEstate } from "@/API/EstatesApi";
// import {
//   ContactAgentButtonsInterface,
//   EstateInterface,
//   EstatePopUpInfoInterface,
// } from "@/Interface/EstateInterface";
// import TitleAtom from "@/Components/Atoms/TitleAtom";
// import ParagraphDescription from "@/Components/Atoms/ParagraphDescription";

// export const ContactAgentButtons: React.FC<ContactAgentButtonsInterface> = ({
//   onlyContact = false,
// }) => {
//   return (
//     <div className="lg:sticky lg:top-20 lg:px-2 fixed bottom-0 bg-gray-100 mt-3 flex justify-center items-center md:border-t sm:border-t border-gray-200 h-fit w-full">
//       <div className="lg:flex lg:flex-col flex flex-row  md:grid md:grid-cols-2 justify-center items-center gap-3 rounded-lg p-2  w-full">
//         {!onlyContact && (
//           <button className="flex flex-col bg-blue-500  hover:bg-blue-600 transform duration-300 py-2 px-15 rounded-md">
//             <div>
//               <p className="flex flex-col items-center text-white font-bold text-md lg:text-lg">
//                 Request a tour
//               </p>
//               <p className="text-xs text-white">as early as today at 10am</p>
//             </div>
//           </button>
//         )}
//         <button className="bg-white hover:bg-gray-200 border border-blue-600 flex justify-center transform duration-300 py-4 lg:py-2 px-15 rounded-md">
//           <p className="flex text-blue-600 font-bold text-md lg:text-lg">
//             Contact Agent
//           </p>
//         </button>
//       </div>
//     </div>
//   );
// };
// const EstatePopUpInfo: React.FC<EstatePopUpInfoInterface> = ({
//   estate_id,
//   onClose,
//   setSelectedEstate,
// }) => {
//   if (!estate_id) return null;
//   const [imagesOpen, setImagesOpen] = useState<boolean>(false);
//   const [estate, setEstate] = useState<any>(null);
//   const [similarEstates, setSimilarEstates] = useState<EstateInterface[]>([]);
//   const fetchEstate = async () => {
//     const response = await getStaticSingleEstate(estate_id);
//     const estateData = Array.isArray(response) ? response[0] : response;
//     const similarEstatesResponse = await getSimilarEstates(
//       estateData.estate_city.name,
//       estateData.id
//     );
//     setEstate(estateData);
//     setSimilarEstates(similarEstatesResponse);
//   };

//   useEffect(() => {
//     if (estate_id) fetchEstate();
//   }, [estate_id]);

//   return (
//     <div className="fixed inset-0 bg-none bg-opacity-50 max-h-[60vh] flex justify-center items-center z-1000  ">
//       <div className="bg-white  px-0 rounded-lg shadow-lg relative lg:w-[80vw] lg:max-w-[80vw] w-[100vw] max-w-[100vw] h-[100vh] max-h-[100vh]  overflow-auto">
//         <EstateHeader
//           onClose={onClose}
//           imagesOpen={imagesOpen}
//           setImagesOpen={setImagesOpen}
//         />

//         {imagesOpen ? (
//           <EstateAllImages
//             images={estate.images}
//             setImagesOpen={setImagesOpen}
//           />
//         ) : (
//           <div className="flex flex-col px-4">
//             <div className="flex flex-col items-start ">
//               <TitleAtom
//                 textSizeLarge="2xl"
//                 title={estate?.title || "Buy Sell Property In Saudi"}
//               />

//               <ParagraphDescription
//                 margin={false}
//                 description={`View the full range of property features, including room
//                 details, unique amenities, and highlights that make this estate
//                 stand out from others.`}
//               />

//               <p className="text-md text-gray-400 ">
//                 {estate?.estate_city?.name}.{estate?.estate_city?.area.name}
//                 .Saudi Arabia
//               </p>
//             </div>
//             <EstateImages
//               images={estate?.images || []}
//               setImagesOpen={setImagesOpen}
//             />

//             <div className="lg:grid lg:grid-cols-[2fr_1fr]  flex flex-col items-start justify-center gap-2 w-full">
//               <EstateProps
//                 estate={estate}
//                 estates={similarEstates}
//                 setSelectedEstate={setSelectedEstate}
//               />
//               <ContactAgentButtons />
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default EstatePopUpInfo;

"use client";

import React, { useEffect, useRef, useState } from "react";
import EstateHeader from "../EstatePopUp/EstateHeader";
import EstateImages from "../EstatePopUp/EstateImages";
import EstateProps from "../EstatePopUp/EstateProps";
import EstateAllImages from "../EstatePopUp/EstateAllImages";
import { getSimilarEstates, getStaticSingleEstate } from "@/API/EstatesApi";
import {
  ContactAgentButtonsInterface,
  EstateInterface,
  EstatePopUpInfoInterface,
} from "@/Interface/EstateInterface";
import TitleAtom from "@/Components/Atoms/TitleAtom";
import ParagraphDescription from "@/Components/Atoms/ParagraphDescription";

export const ContactAgentButtons: React.FC<ContactAgentButtonsInterface> = ({
  onlyContact = false,
}) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-50 border-t border-gray-200 z-50 lg:static lg:bg-transparent lg:border-0">
      <div className="flex flex-row md:grid md:grid-cols-2 lg:flex-col gap-2 p-3 w-full lg:w-auto">
        {!onlyContact && (
          <button className="flex-1 bg-blue-500 hover:bg-blue-600 transition-all duration-300 py-2 px-4 rounded-md text-white font-bold text-sm sm:text-base lg:text-lg">
            <p className="text-center">Request a tour</p>
            <p className="text-xs text-white opacity-90">
              as early as today at 10am
            </p>
          </button>
        )}
        <button className="flex-1 bg-white hover:bg-gray-200 border border-blue-600 transition-all duration-300 py-2 px-4 rounded-md text-blue-600 font-bold text-sm sm:text-base lg:text-lg">
          Contact Agent
        </button>
      </div>
    </div>
  );
};

const EstatePopUpInfo: React.FC<EstatePopUpInfoInterface> = ({
  estate_id,
  onClose,
  setSelectedEstate,
}) => {
  if (!estate_id) return null;

  const [imagesOpen, setImagesOpen] = useState<boolean>(false);
  const [estate, setEstate] = useState<any>(null);
  const [similarEstates, setSimilarEstates] = useState<EstateInterface[]>([]);
  const modalRef = useRef<HTMLDivElement | null>(null);

  const fetchEstate = async () => {
    const response = await getStaticSingleEstate(estate_id);
    const estateData = Array.isArray(response) ? response[0] : response;
    const similarEstatesResponse = await getSimilarEstates(
      estateData.estate_city.name,
      estateData.id
    );
    setEstate(estateData);
    setSimilarEstates(similarEstatesResponse);
  };

  useEffect(() => {
    if (estate_id) fetchEstate();
  }, [estate_id]);

  const handleClickOutside = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose(null);
    }
  };

  return (
    <div
      onClick={handleClickOutside}
      className="fixed inset-0 bg-black/40 flex justify-center items-center z-[1000] lg:mt-0 xl:mt-0 mt-15"
    >
      <div
        ref={modalRef}
        onClick={(e: any) => e.stopPropagation()}
        className="bg-white rounded-lg shadow-lg relative w-full h-full lg:w-[80vw] lg:max-w-[80vw] lg:h-[90vh] overflow-hidden flex flex-col"
      >
        {/* Header */}
        <EstateHeader
          onClose={onClose}
          imagesOpen={imagesOpen}
          setImagesOpen={setImagesOpen}
        />

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {imagesOpen ? (
            <EstateAllImages
              images={estate?.images}
              setImagesOpen={setImagesOpen}
            />
          ) : (
            <div className="flex flex-col px-4 pb-20 lg:pb-4">
              <div className="flex flex-col items-start mb-3">
                <TitleAtom
                  textSizeLarge="2xl"
                  title={estate?.title || "Buy Sell Property In Saudi"}
                />

                <ParagraphDescription
                  margin={false}
                  description={`View the full range of property features, including room details, unique amenities, and highlights that make this estate stand out from others.`}
                />

                <p className="text-sm sm:text-md text-gray-500">
                  {estate?.estate_city?.name}.{estate?.estate_city?.area?.name}.
                  Saudi Arabia
                </p>
              </div>

              <EstateImages
                images={estate?.images || []}
                setImagesOpen={setImagesOpen}
              />

              <div className="lg:grid lg:grid-cols-[2fr_1fr] flex flex-col gap-4 w-full mt-4">
                <EstateProps
                  estate={estate}
                  estates={similarEstates}
                  setSelectedEstate={setSelectedEstate}
                />
                <div className="hidden lg:block">
                  <ContactAgentButtons />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Sticky bottom buttons on mobile */}
        <div className="lg:hidden">
          <ContactAgentButtons />
        </div>
      </div>
    </div>
  );
};

export default EstatePopUpInfo;
