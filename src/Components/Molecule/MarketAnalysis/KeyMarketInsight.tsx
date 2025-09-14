import React from "react";
import TitleAtom from "../../Atoms/TitleAtom";
import IconWithText from "../../Atoms/IconWithText";

interface MarketHighlightInterface {
  title: string;
  value: string;
  description: string;
}

const KeyMarketInsight = () => {
  const marketHighlights: MarketHighlightInterface[] = [
    {
      title: "Average Market Growth",
      value: "+9.8%",
      description: "YoY across all sectors",
    },
    {
      title: "Average Rental Yield",
      value: "7.1%",
      description: "Across prime locations",
    },
    {
      title: "Average Sale Time",
      value: "28 days",
      description: "For investment properties",
    },
  ];

  return (
    <div className=" rounded-lg shadow-2xl py-7 gap-7  lg:px-7 md:px-5 px-2 flex flex-col mt-10">
      <IconWithText
        icon={"trending-up"}
        text={"Market Key Insight"}
        textColor="gap-3     text-xl font-bold"
      />
      <div className="grid grid-cols-1 md:grid-col-3 lg:grid-cols-3 gap-2 ">
        {marketHighlights.map((market, index: number) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-200 px-7 py-2 rounded-lg"
          >
            <p
              className={`${
                market.title === "Average Market Growth"
                  ? "text-green-700"
                  : "text-blue-600"
              } font-bold text-lg`}
            >
              {market.value}
            </p>
            <p className={`text-sm `}>{market.title}</p>
            <p className="text-xs text-gray-600">{market.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyMarketInsight;
