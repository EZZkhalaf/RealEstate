import React, { Dispatch, SetStateAction, useState } from "react";
import IconWithText from "../../Atoms/IconWithText";
import TitleAtom from "../../Atoms/TitleAtom";
import FeatureElement from "../../Atoms/FeatureElement";
import ExpandableParagraph from "../../Atoms/ExpandableParagraph";
import AgentContactForm from "./AgentContactForm";
import EstatesSlide from "./EstatesSlide";
import { EstateInterface } from "@/Interface/EstateInterface";
import FailedMessage from "@/Components/Atoms/FailedMessage";
import { Icon } from "@iconify/react";
import SmallTitle from "@/Components/Atoms/SmallTitle";

interface EstateRoomsAndBedsInterface {
  beds: number;
  baths: number;
  area: string;
  estatePrice: number;
}

interface EstateStatsInterface {
  days_on_market: number;
  saves: number;
  views: number;
}
const EstateRoomsAndBedsAndPrice: React.FC<EstateRoomsAndBedsInterface> = ({
  beds,
  baths,
  area,
  estatePrice,
}) => {
  const areaValue = area ? parseFloat(area.replace(/[^\d.]/g, "")) : 0;

  console.log(areaValue);
  const pricePerSqft =
    areaValue > 0 ? (estatePrice / areaValue).toFixed(2) : "N/A";
  return (
    <div className="flex justify-around gap-4">
      <div className="flex flex-col gap-2 items-center bg-gray-50 justify-between py-4 w-full rounded-lg shadow-sm">
        <Icon
          icon="mdi:bed-outline"
          height="28"
          width="28"
          className="text-gray-400"
        />
        <p className="text-gray-600 text-3xl font-semibold">{beds}</p>
        <p className="text-sm text-gray-400">Beds</p>
      </div>

      <div className="flex flex-col items-center bg-gray-50 justify-between py-4 w-full rounded-lg shadow-sm">
        <Icon
          icon="mdi:bathtub-outline"
          height="28"
          width="28"
          className="text-gray-400"
        />
        <p className="text-gray-600 text-3xl font-semibold">{baths}</p>
        <p className="text-sm text-gray-400">Baths</p>
      </div>

      <div className="flex flex-col items-center bg-gray-50 justify-between py-4 w-full rounded-lg shadow-sm">
        <Icon
          icon="mdi:ruler-square"
          height="28"
          width="28"
          className="text-gray-400"
        />
        <p className="text-gray-600 text-3xl font-semibold">
          {area?.split(" ")[0]}
        </p>
        <p className="text-sm text-gray-400">sqft</p>
      </div>

      <div className="flex  flex-col items-center bg-gray-50 justify-center py-4 w-full rounded-lg shadow-sm">
        <p className="lg:text-3xl text-2xl font-bold ">${estatePrice}</p>
        <p className="text-sm">${pricePerSqft} per sqft</p>
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
  estates: EstateInterface[];
  setSelectedEstate?: Dispatch<SetStateAction<any>>;
}
const EstateProps: React.FC<EstatePropsInterface> = ({
  estate,
  estates,
  setSelectedEstate,
}) => {
  const icons: string[] = [
    "home-outline",
    "calendar-outline",
    "ruler-square",
    "crop-square",
    "account-group-outline",
  ];

  return (
    <div className="flex flex-col gap-1">
      {/* <div className="flex justify-between mt-3 text-gray-700">
        <div>
          <p className="lg:text-2xl text-xl font-bold ">
            ${estate?.price.toLocaleString() ?? "no price"}
          </p>
        </div>
        </div> */}
      <EstateRoomsAndBedsAndPrice
        beds={estate?.beds}
        baths={estate?.baths}
        area={estate?.area}
        estatePrice={estate?.price ?? 0}
      />
      <div className="flex flex-col gap-1 mt-5">
        <SmallTitle
          title="Property Features"
          padding={false}
          additionalCss="text-lg"
        />
        <div className="grid grid-cols-3 gap-2 ">
          {estate?.estate_features?.blocks
            ?.slice(0, 8)
            .map((f: any, idx: number) => (
              <IconWithText
                key={idx}
                icon={"check-circle-outline"}
                iconCss="text-green-400"
                text={f.data.text}
                textColor="text-black  lg:text-sm text-sm"
                bgColor="bg-gray-50 p-1 rounded-lg"
              />
            ))}
        </div>
      </div>

      <div className="bg-gray-300 w-full h-0.5 mt-5 mb-5"></div>

      <SmallTitle
        title={"What's special?"}
        padding={false}
        additionalCss="text-lg"
      />
      <div className="grid grid-cols-3 gap-2 ">
        {" "}
        {estate?.special_properties?.blocks
          .slice(0, 4)
          .map((p: any, indx: number) => (
            // <FeatureElement key={indx} text={p.data.text} />
            <IconWithText
              key={indx}
              icon={icons[indx]}
              iconCss="text-blue-400"
              text={p.data.text}
              textColor="text-black  lg:text-sm text-sm"
              bgColor="bg-gray-50 p-1 rounded-lg"
            />
          ))}
      </div>

      <div className="flex flex-col gap-1 mt-5">
        <SmallTitle
          title={"Description"}
          padding={false}
          additionalCss="text-lg"
        />
        <ExpandableParagraph text={estate?.special_paragraph} />
      </div>

      <EstateStats
        days_on_market={estate?.days_on_market || 0}
        views={estate?.views || 0}
        saves={estate?.saves || 0}
      />

      <div className="bg-gray-300 w-full h-0.5 mt-5 mb-5"></div>

      <div className="max-w-full">
        <TitleAtom title="Similar Estates Nearby" />
        {estates?.length > 0 ? (
          <EstatesSlide
            estates={estates}
            setSelectedEstate={setSelectedEstate}
          />
        ) : (
          <FailedMessage title="No Estate Nearby This Area" paragraph="" />
        )}
      </div>

      <div className="bg-gray-300 w-full h-0.5 mt-5 mb-5"></div>

      <AgentContactForm estate_id={estate?.id} />
      <div className="bg-gray-300 w-full h-0.5 mt-5 mb-5"></div>
    </div>
  );
};

export default EstateProps;
