// import {
//   EstateInterface,
//   InvestEstateInterface,
// } from "@/Interface/EstateInterface";
// import React, { Dispatch } from "react";
// import { CiHeart } from "react-icons/ci";
// import { IoEyeOutline } from "react-icons/io5";

// interface CardImageAreaInterface {
//   estate: InvestEstateInterface;
//   imageHover?: boolean;
//   setImageHover?: any;
//   slides?: boolean;
//   hidePrice?: boolean;
// }

// const InvestEstateImageArea: React.FC<CardImageAreaInterface> = ({
//   estate,
//   imageHover,
//   setImageHover,
//   slides = false,
//   hidePrice = false,
// }) => {
//   //   console.log(estate);
//   const imageUrl =
//     estate.images && estate.images.length > 0
//       ? `http://localhost:8055/assets/${estate.images[0].directus_files_id}`
//       : "";

//   const images =
//     estate.images && estate.images.length > 0
//       ? estate.images.map(
//           (img: any) => `http://localhost:8055/assets/${img.directus_files_id}`
//         )
//       : [];

//   return (
//     <div
//       style={{
//         backgroundImage: `url("${imageUrl}")`,
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "space-between",
//         height: "224px",
//         width: "100%", // instead of 'full'
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//         padding: "0",
//       }}
//       className=" transform transition-transform duration-300"
//     >
//       <div className="flex justify-between p-3">
//         <div className="flex flex-row gap-2">
//           <div className="bg-[#0B3557] rounded-lg flex items-center">
//             <p
//               className="text-white text-xs
//             font-semibold px-2"
//             >
//               {estate.type}
//             </p>
//           </div>
//           <div className="bg-gray-300 rounded-lg flex items-center">
//             <p
//               className="text-gray-500 text-xs
//             font-semibold px-2"
//             >
//               {estate.grade || "none"}
//             </p>
//           </div>
//         </div>
//         <div className="flex flex-row gap-1 px-2">
//           <button className="bg-gray-300 rounded-full p-1 hover:bg-white">
//             <CiHeart />
//           </button>
//         </div>
//       </div>
//       <div className="p-3 flex justify-between">
//         {!hidePrice && (
//           <div
//             className="mb-1 bg-white p-1 rounded-md px-3"
//             style={{ justifySelf: "flex-start" }}
//           >
//             <p className="text-blue-900 font-bold text-lg">
//               ${Number(estate.price).toLocaleString() || 0}
//             </p>
//           </div>
//         )}

//         <div className="mb-1 bg-green-500 p-1 rounded-md px-3">
//           <p className="text-white font-bold text-md">{estate.roi || 0}% ROI</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InvestEstateImageArea;

import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { InvestEstateInterface } from "@/Interface/EstateInterface";

interface CardImageAreaInterface {
  estate: InvestEstateInterface;
  imageHover?: boolean;
  setImageHover?: any;
  slides?: boolean;
  hidePrice?: boolean;
}

const InvestEstateImageArea: React.FC<CardImageAreaInterface> = ({
  estate,
  imageHover,
  setImageHover,
  slides = false,
  hidePrice = false,
}) => {
  // Collect estate images
  const images =
    estate.images && estate.images.length > 0
      ? estate.images.map(
          (img: any) => `http://localhost:8055/assets/${img.directus_files_id}`
        )
      : [];

  // Track current index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Next / Prev handlers
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const currentImage = images.length > 0 ? images[currentIndex] : "";

  return (
    <div
      style={{
        backgroundImage: `url("${currentImage}")`,
      }}
      className="relative flex flex-col justify-between h-80 w-full bg-cover bg-center rounded-lg overflow-hidden transition-all duration-300"
    >
      {/* Top section */}
      <div className="flex justify-between p-3">
        <div className="flex flex-row gap-2">
          <div className="bg-[#0B3557] rounded-lg flex items-center">
            <p className="text-white text-xs font-semibold px-2">
              {estate.type}
            </p>
          </div>
          <div className="bg-gray-300 rounded-lg flex items-center">
            <p className="text-gray-500 text-xs font-semibold px-2">
              {estate.grade || "none"}
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-1 px-2">
          <button className="bg-gray-300 rounded-full p-1 hover:bg-white">
            <CiHeart />
          </button>
        </div>
      </div>

      {/* Bottom section */}
      <div className="p-3 flex justify-between">
        {!hidePrice && (
          <div className="mb-1 bg-white p-1 rounded-md px-3">
            <p className="text-blue-900 font-bold text-lg">
              ${Number(estate.price).toLocaleString() || 0}
            </p>
          </div>
        )}
        <div className="mb-1 bg-green-500 p-1 rounded-md px-3">
          <p className="text-white font-bold text-md">{estate.roi || 0}% ROI</p>
        </div>
      </div>

      {/* Prev / Next Buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
          >
            <IoChevronBack size={20} />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
          >
            <IoChevronForward size={20} />
          </button>
        </>
      )}
    </div>
  );
};

export default InvestEstateImageArea;
