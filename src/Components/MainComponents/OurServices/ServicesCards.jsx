import React from "react";
import ServiceCard from "../../Molecule/ServiceCard";
import ScrollAnimation from "../../../Animation/ScrollAnimation";

const ServicesCards = ({ services }) => {
  return (
    <div className=" w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.slice(0, 3).map((s, index) => (
        <ScrollAnimation key={index}>
          <ServiceCard key={index} service={s} />
        </ScrollAnimation>
      ))}
    </div>
  );
};

export default ServicesCards;
