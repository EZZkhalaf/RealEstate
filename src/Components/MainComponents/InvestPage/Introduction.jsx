import React from "react";
import { FaMoneyBillWave, FaChartLine, FaHome, FaLock } from "react-icons/fa";
import TitleAtom from "../../Atoms/TitleAtom";
import ScrollAnimation from "../../../Animation/ScrollAnimation";

const Introduction = () => {
  const benefits = [
    {
      icon: <FaMoneyBillWave className="text-green-600 text-3xl" />,
      title: "Regular Rental Income",
    },
    {
      icon: <FaChartLine className="text-blue-600 text-3xl" />,
      title: "Long-Term Property Growth",
    },
    {
      icon: <FaHome className="text-orange-600 text-3xl" />,
      title: "Diversification & Stability",
    },
    {
      icon: <FaLock className="text-gray-700 text-3xl" />,
      title: "Tangible & Secure Asset",
    },
  ];

  return (
    <section className="py-12 px-6 bg-gray-50">
      <ScrollAnimation type="fade-up">
        <div className="flex items-center justify-center mb-5">
          <TitleAtom
            title={"Why Invest in Real Estate?"}
            textSizeDefault="lg"
            textSizeLarge="2xl"
          />
        </div>
      </ScrollAnimation>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {benefits.map((item, index) => (
          <ScrollAnimation type="fade-up" delay={index / 2} key={index}>
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-white shadow-md rounded-2xl hover:shadow-lg transition"
            >
              {item.icon}
              <p className="mt-4 text-lg font-medium text-center">
                {item.title}
              </p>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  );
};

export default Introduction;
