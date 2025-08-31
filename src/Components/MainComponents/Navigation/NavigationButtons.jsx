const NavigationButtons = () => {
  return (
    <div className="md:flex lg:flex hidden justify-around items-center gap-6">
      <button className="text-gray-600 hover:text-[#0B3557]">Buy</button>
      <button className="text-gray-600 hover:text-[#0B3557]">Sell</button>
      <button className="text-gray-600 hover:text-[#0B3557]">Invest</button>
      <button className="text-gray-600 hover:text-[#0B3557]">Agents</button>
      <button className="text-gray-600 hover:text-[#0B3557]">
        Market Insights
      </button>
    </div>
  );
};

export default NavigationButtons;
