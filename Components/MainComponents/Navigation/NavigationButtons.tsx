// import { useNavigate } from "react-router-dom";

import { useRouter } from "next/navigation";

const NavigationButtons = () => {
  const router = useRouter();
  return (
    <div className="md:flex lg:flex hidden justify-around items-center gap-6">
      <button className="text-gray-600 hover:text-[#0B3557]">Buy</button>
      <button className="text-gray-600 hover:text-[#0B3557]">Sell</button>
      <button
        onClick={() => router.push("/invest")}
        className="text-gray-600 hover:text-[#0B3557]"
      >
        Invest
      </button>
      <button
        onClick={() => router.push("/agents")}
        className="text-gray-600 hover:text-[#0B3557]"
      >
        Agents
      </button>
      <button className="text-gray-600 hover:text-[#0B3557]">
        Market Insights
      </button>
    </div>
  );
};

export default NavigationButtons;
