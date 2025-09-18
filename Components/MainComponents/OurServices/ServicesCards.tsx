import React from "react";
import ServiceCard from "../../Molecule/ServiceCard";
import ScrollAnimation from "../../../Animation/ScrollAnimation";
import { ServiceInterface } from "@/Interface/ServicesInterface";

interface ServicesCardInterface {
  services?: ServiceInterface[];
}

const ServicesCards: React.FC<{
  services: ServiceInterface[];
}> = ({ services = [] }) => {
  return (
    <div className=" w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.slice(0, 3).map((s: ServiceInterface, index: number) => (
        <ScrollAnimation key={index}>
          <ServiceCard key={index} service={s as ServiceInterface} />
        </ScrollAnimation>
      ))}
    </div>
  );
};

export default ServicesCards;
