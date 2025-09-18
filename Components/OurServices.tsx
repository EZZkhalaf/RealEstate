"use client";
import React, { useEffect, useState } from "react";
import TitleAtom from "./Atoms/TitleAtom";
import ParagraphDescription from "./Atoms/ParagraphDescription";
import ServicesCards from "./MainComponents/OurServices/ServicesCards";
import ScrollAnimation from "../Animation/ScrollAnimation";
import GrayLine from "./Atoms/GrayLine";
import { ServiceInterface } from "@/Interface/ServicesInterface";
import { getStaticOurServices } from "@/API/InvestmentApi";
import Loading from "./Atoms/Loading";

const OurServices = () => {
  const [services, setServices] = useState<ServiceInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const fetchServices = async () => {
    setLoading(true);
    const response = await getStaticOurServices();
    setServices(response);
    setLoading(false);
  };
  useEffect(() => {
    fetchServices();
  }, []);

  if (loading) return <Loading />;
  return (
    <div className="flex flex-col items-center mt-20 lg:px-25">
      <ScrollAnimation>
        <TitleAtom title={"Our Services"} />
      </ScrollAnimation>
      <ScrollAnimation>
        <ParagraphDescription
          description={
            "Comprehensive real estate solutions tailored to your needs"
          }
        />
        <GrayLine width={"w-full"} />
      </ScrollAnimation>

      <div className="flex items-center p-5">
        <ServicesCards services={services} />
      </div>
    </div>
  );
};

export default OurServices;
