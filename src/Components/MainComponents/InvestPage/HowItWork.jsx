import React from "react";
import TitleAtom from "../../Atoms/TitleAtom";

const HowItWork = () => {
  const steps = [
    {
      step: 1,
      title: "Choose Your Property Type",
      desc: "Select from residential, commercial, industrial, land, or REITs.",
    },
    {
      step: 2,
      title: "Estimate Returns",
      desc: "Analyze potential rental income and property value growth.",
    },
    {
      step: 3,
      title: "Secure Financing",
      desc: "Get funding through banks, investors, or personal savings.",
    },
    {
      step: 4,
      title: "Manage Property",
      desc: "Handle it yourself or hire a professional property manager.",
    },
    {
      step: 5,
      title: "Collect Income & Monitor",
      desc: "Receive rental income and track property appreciation.",
    },
  ];
  return (
    <section className="py-12 px-6 bg-white">
      <div className="flex items-center justify-center mb-5">
        <TitleAtom
          title={"How it works ?"}
          textSizeDefault="lg"
          textSizeLarge="2xl"
        />
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {steps.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4 bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition"
          >
            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold">
              {item.step}
            </div>
            <div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-600 mt-1">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWork;
