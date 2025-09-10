import React from "react";
import ResidentialEstate from "../../../assets/ResidentialEstate.webp";
import commercialProperties from "../../../assets/commercialProperties.jpeg";
import industrialProperties from "../../../assets/industrialProperties.jpeg";
import landAndPlot from "../../../assets/landAndPlot.jpg";
import REIT from "../../../assets/REIT.webp";
import TitleAtom from "../../Atoms/TitleAtom";
const TypesOfEstates = () => {
  const types = [
    {
      title: "Residential Properties",
      desc: "Houses, apartments, and villas.",
      img: ResidentialEstate,
    },
    {
      title: "Commercial Properties",
      desc: "Shops, offices, and malls.",
      img: commercialProperties,
    },
    {
      title: "Industrial Properties",
      desc: "Warehouses and factories.",
      img: industrialProperties,
    },
    {
      title: "Land & Plots",
      desc: "Raw land for future development.",
      img: landAndPlot,
    },
    {
      title: "REITs",
      desc: "Indirect investments via real estate funds.",
      img: REIT,
    },
  ];

  return (
    <section className="py-12 px-6 bg-gray-50">
      <div className="flex items-center justify-center mb-5">
        <TitleAtom
          title={"Types of Real Estate Investments"}
          textSizeDefault="lg"
          textSizeLarge="2xl"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {types.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={item.img}
              alt={item.title}
              className="h-40 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TypesOfEstates;
