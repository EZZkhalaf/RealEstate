import React from "react";
import { Icon } from "@iconify/react";

interface TriggerButtonsInterface {
  text: string;
  icon: string;
  onClick: any;
}

const TriggerButtons: React.FC<TriggerButtonsInterface> = ({
  text,
  icon,
  onClick,
}) => {
  return (
    <div className="flex items-center">
      <button
        onClick={onClick}
        className=" py-1 px-2 bg-gray-100 hover:bg-gray-200 text-gray-600
         font-semibold flex items-center justify-center w-full rounded-sm border border-gray-400 
         whitespace-nowrap transition-colors duration-300"
      >
        <span className="mr-2">{text}</span>
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
