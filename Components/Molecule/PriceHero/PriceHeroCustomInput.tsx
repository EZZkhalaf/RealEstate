import InputGray from "@/Components/Atoms/InputGray";
import { FaSearch } from "react-icons/fa";

interface PriceHeroCustomInputInterface {
  type: string;
  placeholder: string;
}

const PriceHeroCustomInput: React.FC<PriceHeroCustomInputInterface> = ({
  type,
  placeholder,
}) => {
  return (
    <div className="flex flex-row items-center bg-gray-200 px-3 gap-3 rounded-xl flex-grow ">
      <FaSearch />
      <InputGray type={type} placeholder={placeholder} />
    </div>
  );
};

export default PriceHeroCustomInput;
