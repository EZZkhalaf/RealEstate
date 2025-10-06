import { useRouter } from "next/navigation";
import Link from "next/link";
const NavigationButtons = () => {
  return (
    <div className="md:flex lg:flex hidden justify-around items-center gap-6">
      <Link href={"/"}>
        <button className="text-gray-600 hover:text-[#0B3557] cursor-pointer">
          Home
        </button>
      </Link>
      <Link href={"/properties"}>
        <button className="text-gray-600 hover:text-[#0B3557] cursor-pointer">
          Properties
        </button>
      </Link>
      <Link href={"/invest"}>
        <button className="text-gray-600 hover:text-[#0B3557] cursor-pointer">
          Invest
        </button>
      </Link>
      <Link href={"agents"}>
        <button className="text-gray-600 hover:text-[#0B3557] cursor-pointer">
          Agents
        </button>
      </Link>
    </div>
  );
};

export default NavigationButtons;
