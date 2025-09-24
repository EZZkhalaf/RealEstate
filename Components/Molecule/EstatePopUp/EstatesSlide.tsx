// "use client";
// // import React, { useState } from "react";
// // import CardImageArea from "../CardImageArea";
// // import Status from "../../Atoms/Status";
// // import { EstateInterface } from "@/Interface/EstateInterface";
// // import { Swiper, SwiperSlide } from "swiper/react";

// // interface SuggestionCardInterface {
// //   estate: EstateInterface;
// // }

// // const SuggestionCard: React.FC<SuggestionCardInterface> = ({ estate }) => {
// //   return (
// //     <div className="flex flex-col w-full  border border-gray-100 rounded-lg  shadow-2xl">
// //       <CardImageArea estate={estate} hidePrice={true} />
// //       {/* body */}
// //       <div className="flex flex-col w-full bg-gray-200 px-2 gap-3 mt-3 pb-3">
// //         <p className="text-md font-bold mt-2">{estate.price}</p>
// //         <div className="flex flex-row lg:justify-between  gap-1">
// //           <div className="flex gap-1">
// //             <p className="font-bold">{estate.beds}</p>
// //             bds
// //           </div>
// //           |
// //           <div className="flex gap-1">
// //             <p className="font-bold">{estate.baths}</p>
// //             ba
// //           </div>
// //           |
// //           <div className="flex gap-1">
// //             <p className="font-bold">{estate.beds}</p>
// //             bds
// //           </div>
// //         </div>

// //         <p className="text-gray-500 text-sm">{estate.location}</p>

// //         {estate.market_status === "on" ? (
// //           <Status
// //             isActive={true}
// //             activeText={`${estate.market_status} the market`}
// //           />
// //         ) : (
// //           <Status
// //             isActive={false}
// //             offlineText={`${estate.market_status} the market`}
// //           />
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // //will be edit later
// // const EstatesSlide: React.FC<{ estates?: EstateInterface[] }> = ({
// //   estates,
// // }) => {
// //   const [currentIndex, setCurrentIndex] = useState<number>(0);
// //   const estatesPerSlide: number = 3;

// //   const visibleEstates = estates?.slice(
// //     currentIndex,
// //     currentIndex + estatesPerSlide
// //   );

// //   return (
// //     <div className=" w-full  px-2">
// //       {/* Cards */}

// //       <Swiper
// //         spaceBetween={20} // gap between cards
// //         slidesPerView={4} // show 4 at a time
// //         loop={true} // loop through slides
// //         autoplay={{ delay: 3000 }}
// //       >
// //         {/* <div className="lg:flex  sm:grid-cols-1 sm:grid md:grid md:grid-cols-2 gap-2 overflow-hidden w-full justify-center"> */}
// //         {visibleEstates?.map((estate) => (
// //           <SwiperSlide key={estate.id}>
// //             <SuggestionCard
// //               estate={estate as EstateInterface}
// //               key={estate.id}
// //             />
// //           </SwiperSlide>
// //         ))}
// //         {/* </div> */}
// //       </Swiper>
// //     </div>
// //   );
// // };

// // export default EstatesSlide;

// import CardImageArea from "../CardImageArea";
// import Status from "../../Atoms/Status";
// import { EstateInterface } from "@/Interface/EstateInterface";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// interface SuggestionCardInterface {
//   estate: EstateInterface;
// }

// const SuggestionCard: React.FC<SuggestionCardInterface> = ({ estate }) => {
//   return (
//     <div className="flex flex-col w-full border border-gray-100 rounded-lg shadow-2xl bg-white">
//       <CardImageArea estate={estate} hidePrice={true} />
//       <div className="flex flex-col w-full px-3 gap-3 mt-3 pb-3">
//         <p className="text-md font-bold mt-2">{estate.price}</p>
//         <div className="flex flex-row lg:justify-between gap-1 items-center text-sm">
//           <div className="flex gap-1 items-center">
//             <p className="font-bold">{estate.beds}</p>
//             <span>bds</span>
//           </div>
//           <span>|</span>
//           <div className="flex gap-1 items-center">
//             <p className="font-bold">{estate.baths}</p>
//             <span>ba</span>
//           </div>
//           <span>|</span>
//           <div className="flex gap-1 items-center">
//             <p className="font-bold">{estate.area}</p>
//             <span>sqft</span>
//           </div>
//         </div>

//         <p className="text-gray-500 text-sm">{estate.location}</p>

//         {estate.market_status === "on" ? (
//           <Status
//             isActive={true}
//             activeText={`${estate.market_status} the market`}
//           />
//         ) : (
//           <Status
//             isActive={false}
//             offlineText={`${estate.market_status} the market`}
//           />
//         )}
//       </div>
//     </div>
//   );
// };

// const EstatesSlide: React.FC<{ estates?: EstateInterface[] }> = ({
//   estates = [],
// }) => {
//   return (
//     <div className="max-w-7xl min-w-7xl px-2">
//       <Swiper
//         modules={[Navigation, Pagination, Autoplay]}
//         spaceBetween={20}
//         slidesPerView={2}
//         loop={true}
//         autoplay={{ delay: 2500, disableOnInteraction: false }}
//         speed={800} // smooth transition
//         navigation
//         pagination={{ clickable: true }}
//         breakpoints={{
//           320: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 10 },
//           640: { slidesPerView: 2, slidesPerGroup: 1, spaceBetween: 15 },
//           1024: { slidesPerView: 4, slidesPerGroup: 1, spaceBetween: 20 },
//         }}
//         className="py-4"
//       >
//         {estates.map((estate, idx) => (
//           <SwiperSlide key={estate.id ?? idx}>
//             <SuggestionCard estate={estate} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default EstatesSlide;

import React, { useState } from "react";
import CardImageArea from "../CardImageArea";
import Status from "../../Atoms/Status";
import { EstateInterface } from "@/Interface/EstateInterface";

interface SuggestionCardInterface {
  estate: EstateInterface;
}

const SuggestionCard: React.FC<SuggestionCardInterface> = ({ estate }) => {
  return (
    <div className="flex flex-col w-full  border border-gray-100 rounded-lg  shadow-2xl">
      <CardImageArea estate={estate} hidePrice={true} />
      {/* body */}
      <div className="flex flex-col w-full bg-gray-200 px-2 gap-3 mt-3 pb-3">
        <p className="text-md font-bold mt-2">{estate.price}</p>
        <div className="flex flex-row lg:justify-between  gap-1">
          <div className="flex gap-1">
            <p className="font-bold">{estate.beds}</p>
            bds
          </div>
          |
          <div className="flex gap-1">
            <p className="font-bold">{estate.baths}</p>
            ba
          </div>
          |
          <div className="flex gap-1">
            <p className="font-bold">{estate.beds}</p>
            bds
          </div>
        </div>

        <p className="text-gray-500 text-sm">{estate.location}</p>

        {estate.market_status === "on" ? (
          <Status
            isActive={true}
            activeText={`${estate.market_status} the market`}
          />
        ) : (
          <Status
            isActive={false}
            offlineText={`${estate.market_status} the market`}
          />
        )}
      </div>
    </div>
  );
};

//will be edit later
const EstatesSlide: React.FC<{ estates?: EstateInterface[] }> = ({
  estates = [],
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const estatesPerSlide: number = 3;

  const visibleEstates = estates.slice(
    currentIndex,
    currentIndex + estatesPerSlide
  );

  return (
    <div className="relative w-full flex flex-col items-center">
      {/* Cards */}
      <div className="lg:flex  sm:grid-cols-1 sm:grid md:grid md:grid-cols-2 gap-2 overflow-hidden w-full justify-center">
        {visibleEstates.map((estate) => (
          <SuggestionCard estate={estate as EstateInterface} key={estate.id} />
        ))}
      </div>
    </div>
  );
};

export default EstatesSlide;
