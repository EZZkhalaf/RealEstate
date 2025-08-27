import React, { useState } from "react";

const Navigation = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div
      className="fixed top-0 left-0 right-0 flex justify-around items-center w-full bg-gray-200 p-4 shadow-md z-50"
      style={{ fontFamily: "Newsreader" }}
    >
      <div>{"                "}</div>
      <div className="md:flex lg:flex hidden justify-around items-center gap-6">
        <button className="text-gray-600 hover:text-[#0B3557]">Buy</button>
        <button className="text-gray-600 hover:text-[#0B3557]">Sell</button>
        <button className="text-gray-600 hover:text-[#0B3557]">Invest</button>
        <button className="text-gray-600 hover:text-[#0B3557]">Agents</button>
        <button className="text-gray-600 hover:text-[#0B3557]">
          Market Insights
        </button>
      </div>

      <div className="flex justify-around items-center gap-6">
        <button className="text-black hover:bg-gray-300 p-2 rounded">
          Sign In
        </button>
        <button className="text-white bg-[#0b3557e6] p-2 hover:bg-[#144b7d] rounded">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Navigation;
