import React, { useState } from "react";
import IconWithText from "../../Atoms/IconWithText";
import TitleAtom from "../../Atoms/TitleAtom";
import FeatureElement from "../../Atoms/FeatureElement";
import ExpandableParagraph from "../../Atoms/ExpandableParagraph";
import AgentContactForm from "./AgentContactForm";
import EstatesSlide from "./EstatesSlide";
import { EstateInterface } from "../../FeaturedProp";

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
    <div className="flex gap-3">
      <div className="flex flex-col gap-1 ">
        <p className="text-2xl font-bold">{beds}</p>
        <p>Beds</p>
      </div>
      <div className="flex flex-col gap-1 ">
        <p className="text-2xl font-bold">{baths}</p>
        <p>Baths</p>
      </div>
      <div className="flex flex-col gap-1 ">
        <p className="text-2xl font-bold">{area}</p>
        <p>sqft</p>
      </div>
    </div>
  );
};

const EstateStats: React.FC<EstateStatsInterface> = ({
  days_on_market,
  saves,
  views,
}) => {
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

interface ListingByInterface {
  name: string;
  id: number;
  contact: string | null;
}
interface AgentsActionsInterface {
  last_checked: string;
  listing_updated: string;
  list: ListingByInterface[];
}
const AgentsActions: React.FC<AgentsActionsInterface> = ({
  last_checked,
  listing_updated,
  list,
}) => {
  return (
    <div>
      <div className="text-sm flex gap-1">
        <p className="font-bold ">Last Checked : </p>
        {last_checked}
      </div>
      <div className="text-sm flex gap-1">
        <p className="font-bold">Listing Updated : </p>
        {listing_updated}
      </div>
      <br></br>
      <p className="text-gray-800 font-bold text-sm">Listing By:</p>
      <div className="grid lg:grid-cols-2 grid-cols-1">
        {list?.map((l, indx: number) => (
          <div key={indx} className="flex gap-1 text-sm">
            <p>{l.name}</p>
            <p className="font-bold">{l.contact || "no contact"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

interface EstatePropsInterface {
  estate: EstateInterface;
}
const EstateProps: React.FC<EstatePropsInterface> = ({ estate }) => {
  const icons: string[] = [
    "home-outline",
    "calendar-outline",
    "ruler-square",
    "crop-square",
    "account-group-outline",
  ];
  return (
    <div className="flex flex-col gap-1">
      <button className="flex underline text-blue-700 hover:text-blue-800 hover:font-semibold transform duration-300">
        Foreclosure
      </button>

      <div className="flex justify-between">
        <div>
          <p className="lg:text-2xl text-xl font-bold ">{estate.price}</p>
          <p className="text-lg ">{estate.location}</p>
        </div>
        <EstateRoomsAndBeds
          beds={estate.beds}
          baths={estate.baths}
          area={estate.area}
        />
      </div>
      <div className="grid grid-cols-3 gap-2 mt-5">
        {estate?.features?.map((f, idx) => (
          <IconWithText
            icon={icons[idx]}
            text={f}
            textColor="text-black  lg:text-lg text-md"
            bgColor="bg-gray-100 p-1 rounded-lg"
          />
        ))}
      </div>

      <div className="bg-gray-300 w-full h-0.5 mt-5 mb-5"></div>

      <TitleAtom title={"What's special?"} />
      <div className="flex gap-2 mt-5">
        {estate?.special_props?.map((p, indx) => (
          <FeatureElement key={indx} text={p} />
        ))}
      </div>

      <ExpandableParagraph text={estate.special_paragraph} />

      <EstateStats
        days_on_market={estate.stats.days_on_market}
        views={estate.stats.views}
        saves={estate.stats.saves}
      />

      <AgentsActions
        last_checked={estate.listing_info?.last_checked}
        listing_updated={estate.listing_info?.listing_updated}
        list={estate.listing_info.listing_by}
      />
      <div className="bg-gray-300 w-full h-0.5 mt-5 mb-5"></div>

      <AgentContactForm />
      <div className="bg-gray-300 w-full h-0.5 mt-5 mb-5"></div>
      <TitleAtom title={"Similar Estates Near This Area"} />
      <EstatesSlide />
    </div>
  );
};

export default EstateProps;
