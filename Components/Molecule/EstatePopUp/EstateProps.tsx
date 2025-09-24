import React, { useState } from "react";
import IconWithText from "../../Atoms/IconWithText";
import TitleAtom from "../../Atoms/TitleAtom";
import FeatureElement from "../../Atoms/FeatureElement";
import ExpandableParagraph from "../../Atoms/ExpandableParagraph";
import AgentContactForm from "./AgentContactForm";
import EstatesSlide from "./EstatesSlide";
import { EstateInterface } from "@/Interface/EstateInterface";

interface EstateRoomsAndBedsInterface {
  beds: number;
  baths: number;
  area: string;
}

interface EstateStatsInterface {
  days_on_market: number;
  saves: number;
  views: number;
}
const EstateRoomsAndBeds: React.FC<EstateRoomsAndBedsInterface> = ({
  beds,
  baths,
  area,
}) => {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center ">
        <p className="text-gray-500 text-3xl font-semibold">{beds}</p>
        <p className="text-sm text-gray-400">Beds</p>
      </div>
      <div className="flex flex-col  items-center">
        <p className="text-gray-500 text-3xl font-semibold">{baths}</p>
        <p className="text-sm text-gray-400">Baths</p>
      </div>
      <div className="flex flex-col  items-center ">
        <p className="text-gray-500 text-3xl font-semibold">
          {area?.split(" ")[0]}
        </p>
        <p className="text-sm text-gray-400">sqft</p>
      </div>
    </div>
  );
};

const EstateStats: React.FC<EstateStatsInterface> = ({
  days_on_market,
  saves,
  views,
}) => {
  console.log("days on market ? : ", days_on_market, views, saves);
  return (
    <div className="flex gap-3 mt-4">
      <div className="flex gap-1">
        <p className="text-black font-bold">{days_on_market}</p>
        <p>In Market</p>
      </div>
      <div className="flex gap-1">
        <p className="text-black font-bold">{views}</p>
        <p>Views</p>
      </div>
      <div className="flex gap-1">
        <p className="text-black font-bold">{saves}</p>
        <p>Saves</p>
      </div>
    </div>
  );
};

// interface ListingByInterface {
//   name: string;
//   id: number;
//   contact: string | null;
// }
// interface AgentsActionsInterface {
//   last_checked: string;
//   listing_updated: string;
//   list: ListingByInterface[];
// }
// const AgentsActions: React.FC<AgentsActionsInterface> = ({
//   last_checked,
//   listing_updated,
//   list,
// }) => {
//   return (
//     <div>
//       <div className="text-sm flex gap-1">
//         <p className="font-bold ">Last Checked : </p>
//         {last_checked}
//       </div>
//       <div className="text-sm flex gap-1">
//         <p className="font-bold">Listing Updated : </p>
//         {listing_updated}
//       </div>
//       <br></br>
//       <p className="text-gray-800 font-bold text-sm">Listing By:</p>
//       <div className="grid lg:grid-cols-2 grid-cols-1">
//         {list?.map((l, indx: number) => (
//           <div key={indx} className="flex gap-1 text-sm">
//             <p>{l.name}</p>
//             <p className="font-bold">{l.contact || "no contact"}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

interface EstatePropsInterface {
  estate: EstateInterface;
  estates?: EstateInterface[];
}
const EstateProps: React.FC<EstatePropsInterface> = ({ estate, estates }) => {
  // console.log(estate);
  const icons: string[] = [
    "home-outline",
    "calendar-outline",
    "ruler-square",
    "crop-square",
    "account-group-outline",
  ];
  return (
    <div className="flex flex-col gap-1">
      <button className="flex underline text-blue-700 hover:text-blue-800 font-bold transform duration-300">
        Foreclosure
      </button>

      <div className="flex flex-col items-start ">
        <h1 className="text-2xl ">
          {estate?.title || "Buy Sell Property In Saudi"}
        </h1>
        <p className="text-lg text-gray-400 ">
          {estate?.estate_city?.name}.{estate?.estate_city?.area.name}.Saudi
          Arabia
        </p>
      </div>
      <div className="flex justify-between mt-3 text-gray-700">
        <div>
          <p className="lg:text-2xl text-xl font-bold ">
            ${estate?.price.toLocaleString() ?? "no price"}
          </p>
        </div>
        <EstateRoomsAndBeds
          beds={estate?.beds}
          baths={estate?.baths}
          area={estate?.area}
        />
      </div>
      <div className="grid grid-cols-3 gap-2 mt-5">
        {estate?.features?.map((f: string, idx: number) => (
          <IconWithText
            key={idx}
            icon={icons[idx]}
            text={f}
            textColor="text-black  lg:text-lg text-md"
            bgColor="bg-gray-200 p-1 rounded-lg"
          />
        ))}
      </div>

      <div className="bg-gray-300 w-full h-0.5 mt-5 mb-5"></div>

      <TitleAtom title={"What's special?"} />
      <div className="flex gap-2 mt-5">
        {estate?.special_props?.map((p: string, indx: number) => (
          <FeatureElement key={indx} text={p} />
        ))}
      </div>

      <ExpandableParagraph text={estate?.special_paragraph} />

      <EstateStats
        days_on_market={estate?.days_on_market || 0}
        views={estate?.views || 0}
        saves={estate?.saves || 0}
      />
      {/* 
      <AgentsActions
        last_checked={estate?.listing_info?.last_checked}
        listing_updated={estate?.listing_info?.listing_updated}
        list={estate?.listing_info?.listing_by}
      /> */}
      <div className="bg-gray-300 w-full h-0.5 mt-5 mb-5"></div>

      <div className="max-w-full">
        <TitleAtom title="Similar Estates Nearby" />

        <EstatesSlide estates={estates} />
      </div>

      <div className="bg-gray-300 w-full h-0.5 mt-5 mb-5"></div>

      <AgentContactForm />
      <div className="bg-gray-300 w-full h-0.5 mt-5 mb-5"></div>
    </div>
  );
};

export default EstateProps;
