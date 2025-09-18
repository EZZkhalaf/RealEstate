// import { useNavigate } from "react-router-dom";

import { useRouter } from "next/navigation";
import Link from "next/link";
const NavigationButtons = () => {
  const router = useRouter();
  return (
    <div className="md:flex lg:flex hidden justify-around items-center gap-6">
      <Link href={"/"}>
        <button className="text-gray-600 hover:text-[#0B3557]">Home</button>
      </Link>
      <button className="text-gray-600 hover:text-[#0B3557]">Sell</button>
      <Link href={"/invest"}>
        <button className="text-gray-600 hover:text-[#0B3557]">Invest</button>
      </Link>
      <Link href={"agents"}>
        <button className="text-gray-600 hover:text-[#0B3557]">Agents</button>
      </Link>
      <button className="text-gray-600 hover:text-[#0B3557]">
        Market Insights
      </button>
    </div>
  );
};

export default NavigationButtons;
