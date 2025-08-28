import React from "react";
import ParagraphDescription from "../Atoms/ParagraphDescription";
import TitleAtom from "../Atoms/TitleAtom";
import { CiCircleCheck } from "react-icons/ci";
import ViewButtonAtom from "../Atoms/ViewButtonAtom";
import { Icon } from "@iconify/react";
import IconAtom from "../Atoms/IconAtom";

const ServiceCard = ({ service }) => {
  return (
    <div className="flex flex-col bg-gray-200 p-8 gap-4 hover:shadow-lg duration-300">
      <IconAtom icon={service.icon} />

      <TitleAtom title={service.title} />
      <ParagraphDescription description={service.description} />

      <div className="mt-7 gap-4 mb-6">
        {service.features.map((f, index) => (
          <div
            key={index}
            className="flex items-center mt-4 gap-1 text-gray-400"
          >
            <CiCircleCheck /> {f}
          </div>
        ))}
      </div>

      <ViewButtonAtom
        color={"#0B3557"}
        hoverColor={"#0B3557"}
        title={"Get Valuation"}
        navigateTo={"idk"}
        textColor={"#FFFFFF"}
      />
    </div>
  );
};

export default ServiceCard;
