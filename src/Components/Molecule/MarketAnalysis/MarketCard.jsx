import React from "react";
import { Icon } from "@iconify/react";

const MarketCard = ({ market }) => {
  //   {
  //   name: "Riyadh - KAFD",
  //   description: "Strong growth expected",
  //   appreciation: "+12.8%",
  //   rentalYield: "7.2%",
  //   avgPrice: "₹3.2M",
  // },

  return (
    <div className="flex flex-col gap-3 rounded-lg shadow-lg px-4 py-6">
      <div className="flex justify-between">
        <div className="flex flex-col gap-1 ">
          <h1 className="font-bold text-lg">{market.name}</h1>
          <p className="text-sm text-gray-600 ">{market.description}</p>
        </div>

        <div className="bg-gray-200  border border-red-200 rounded-lg flex items-center h-fit p-2">
          <Icon
            icon="mdi:arrow-top-right-bold"
            width={15}
            height={15}
            className="text-green-600"
          />
        </div>
      </div>

      <div className="flex justify-around py-6 px-3 w-full">
        <div className="flex flex-col items-center">
          <p className="text-green-700 font-bold text-md mb-1">
            {market.appreciation}
          </p>
          <p className="text-xs text-gray-600">Appreciation</p>
        </div>
        <div className="flex flex-col  items-center">
          <p className="text-blue-700 font-bold text-md mb-1">
            {market.rentalYield}
          </p>
          <p className="text-xs text-gray-600">Rental Yield</p>
        </div>
        <div className="flex flex-col  items-center">
          <p className=" text-md font-bold mb-1">{market.avgPrice}</p>
          <p className="text-xs text-gray-600">Average Price</p>
        </div>
      </div>
    </div>
  );
};

export default MarketCard;
