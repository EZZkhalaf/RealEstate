import React from "react";
import ParagraphDescription from "../Atoms/ParagraphDescription";
import TitleAtom from "../Atoms/TitleAtom";
import { CiCircleCheck } from "react-icons/ci";
import ViewButtonAtom from "../Atoms/ViewButtonAtom";
import IconAtom from "../Atoms/IconAtom";
import { ServiceInterface } from "@/Interface/ServicesInterface";

const ServiceCard: React.FC<{ service: ServiceInterface }> = ({ service }) => {
  return (
    <div className="flex flex-col bg-gray-100 p-6 gap-2 hover:shadow-lg duration-300 rounded-lg min-h-fit">
      <IconAtom icon={service.icon} />

      <TitleAtom title={service.title} />
      <ParagraphDescription
        description={service.description}
        textAlignment="text-start"
      />

      <div className="mt-7 gap-4 mb-6">
        {service.features.map((f, index: number) => (
          <div
            key={index}
            className="flex items-center mt-4 gap-1 text-gray-500"
          >
            <CiCircleCheck /> {f}
          </div>
        ))}
      </div>

      <ViewButtonAtom
        color={"#0B3557"}
        hoverColor={"#0B3557"}
        title={"Get Valuation"}
        // navigateTo={"idk"}
        textColor={"#FFFFFF"}
      />
    </div>
  );
};

export default ServiceCard;
