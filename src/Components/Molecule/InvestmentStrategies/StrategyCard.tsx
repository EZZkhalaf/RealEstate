import React from "react";
import IconAtom from "../../Atoms/IconAtom";
import { Icon } from "@iconify/react";
import ButtonCustomize from "../../Atoms/ButtonCustomize";
import ViewButtonAtom from "../../Atoms/ViewButtonAtom";

export interface StrategyInterface {
  title: string;
  description: string;
  timeframe: string;
  riskLevel: string;
  pros: string[];
  cons: string[];
  bestFor: string;
  link: string;
  icon: string;
}

interface StrategyCardInterface {
  strategy: StrategyInterface;
}

const StrategyCard: React.FC<StrategyCardInterface> = ({ strategy }) => {
  //  {
  //   title: "Fix & Flip",
  //   description:
  //     "Short-term profits through property renovation and quick resale",
  //   timeframe: "6-18 months",
  //   riskLevel: "High",
  //   pros: ["Quick profits", "Active involvement", "Market timing"],
  //   cons: ["High risk", "Capital intensive", "Market dependent"],
  //   bestFor: "Experienced investors with renovation skills",
  //   link: "Learn More",
  // },
  return (
    <div className="flex flex-col gap-2 rounded-lg   hover:shadow-lg py-2 px-5 transform-content duration-400">
      <div className="flex gap-2 mb-2 items-center">
        <IconAtom icon={strategy.icon} />
        <div className="flex flex-col gap-1 ">
          <h1 className="font-semibold text-lg">{strategy.title}</h1>
          <p className="text-xs text-gray-600 ">{strategy.description}</p>
        </div>
      </div>

      <div className="grid w-full grid-cols-2 gap-4 mb-6">
        <div className="">
          <p className="text-xs font-semibold text-gray-800 mb-1">Timeframe</p>
          <p className="text-xs  font-semibold">{strategy.timeframe}</p>
        </div>

        <div className="flex flex-col items-start">
          <p className="text-xs font-semibold text-gray-800 mb-1">Risk Level</p>
          <p className="text-xs font-semibold text-gray-800 bg-gray-200 py-1 px-2 rounded-lg  ">
            {strategy.riskLevel}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 w-full ">
        <div className="">
          <p className="text-sm text-gray-700">Pros</p>
          <div className="flex flex-col gap-1">
            {strategy.pros?.map((pro: string, index: number) => (
              <div key={index} className="flex flex-row gap-1">
                <Icon
                  icon="mdi:check-circle"
                  width={16}
                  height={16}
                  className="text-green-500"
                />
                <p className="text-xs text-gray-600"> {pro}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="">
          <p className="text-sm text-gray-700">Cons</p>
          <div className="flex flex-col gap-1">
            {strategy.cons?.map((con: string, index: number) => (
              <div key={index} className="flex flex-row gap-1">
                <Icon
                  icon="mdi:close-circle"
                  width={16}
                  height={16}
                  className="text-red-500"
                />
                <p className="text-xs text-gray-600"> {con}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-4 mb-4">
        <p className="text-xs font-bold">Best For :</p>
        <p className="text-xs">{strategy.bestFor}</p>
      </div>

      <ViewButtonAtom
        title={"Learn More"}
        color={"#0B3557"}
        hoverColor={"#0B3557"}
        textColor={"#FFFFFF"}
        hoverTextColor={"#FFFFFF"}
        padding="text-xs py-2"
      />
    </div>
  );
};

export default StrategyCard;
