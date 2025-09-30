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

interface EstatePropsInterface {
  estate: EstateInterface;
  estates?: EstateInterface[];
}
const EstateProps: React.FC<EstatePropsInterface> = ({ estate, estates }) => {
  const icons: string[] = [
    "home-outline",
    "calendar-outline",
    "ruler-square",
    "crop-square",
    "account-group-outline",
  ];
  // const [name, setName] = useState<string>("");
  // const [email, setEmail] = useState<string>("");
  // const [phone, setPhone] = useState<string>("");
  // const [message, setMessage] = useState<string>("");

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
        {estate?.estate_features?.blocks
          ?.slice(0, 4)
          .map((f: any, idx: number) => (
            <IconWithText
              key={idx}
              icon={icons[idx]}
              text={f.data.text}
              textColor="text-black  lg:text-lg text-md"
              bgColor="bg-gray-200 p-1 rounded-lg"
            />
          ))}
      </div>

      <div className="bg-gray-300 w-full h-0.5 mt-5 mb-5"></div>

      <TitleAtom title={"What's special?"} />
      <div className="flex gap-2 mt-5">
        {estate?.special_properties?.blocks.map((p: any, indx: number) => (
          <FeatureElement key={indx} text={p.data.text} />
        ))}
      </div>

      <ExpandableParagraph text={estate?.special_paragraph} />

      <EstateStats
        days_on_market={estate?.days_on_market || 0}
        views={estate?.views || 0}
        saves={estate?.saves || 0}
      />

      <div className="bg-gray-300 w-full h-0.5 mt-5 mb-5"></div>

      <div className="max-w-full">
        <TitleAtom title="Similar Estates Nearby" />

        <EstatesSlide estates={estates} />
      </div>

      <div className="bg-gray-300 w-full h-0.5 mt-5 mb-5"></div>

      <AgentContactForm estate_id={estate?.id} />
      <div className="bg-gray-300 w-full h-0.5 mt-5 mb-5"></div>
    </div>
  );
};

export default EstateProps;
