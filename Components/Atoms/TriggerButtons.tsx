import { TriggerButtonsInterface } from "@/Interface/ServicesInterface";
import { Icon } from "@iconify/react";

const TriggerButtons: React.FC<TriggerButtonsInterface> = ({
  text,
  icon,
  onClick,
}) => {
  return (
    <div className="flex items-center">
      <button
        onClick={onClick}
        className=" py-1 px-2    hover:bg-gray-200 text-gray-800
         font-semibold flex items-center justify-center w-full rounded-sm border border-gray-300 
         whitespace-nowrap transition-colors duration-300"
      >
        <span className="mr-2 lg:text-md text-sm font-semibold  ">{text}</span>
        <Icon
          icon={`mdi-light:${icon}`}
          height="20"
          width="20"
          className="font-bold"
        />
      </button>
    </div>
  );
};

export default TriggerButtons;
