import React from "react";
import ResidentialEstate from "../../../assets/ResidentialEstate.webp";
import commercialProperties from "../../../assets/commercialProperties.jpeg";
import industrialProperties from "../../../assets/industrialProperties.jpeg";
import landAndPlot from "../../../assets/landAndPlot.jpg";
import REIT from "../../../assets/REIT.webp";
import TitleAtom from "../../Atoms/TitleAtom";
import TypesListing from "../../Molecule/TypesListing";
import ImageWithParagraph from "../../Molecule/ImageWithParagraph";
import ScrollAnimation from "../../../Animation/ScrollAnimation";
const TypesOfEstates = () => {
  const types = [
    {
      title: "Residential Properties",
      desc: "Residential real estate includes houses, apartments, and villas that people live in. It is often the most popular choice for first-time investors because it provides steady rental income and long-term property value appreciation. Demand for housing is usually consistent, making this a relatively secure investment option.",
      img: ResidentialEstate,
    },
    {
      title: "Commercial Properties",
      desc: "Commercial real estate covers shops, offices, malls, and other spaces used for business purposes. These properties often generate higher rental yields than residential ones but may come with longer vacancy periods. They are a great option for investors looking for bigger returns and exposure to the business sector.",
      img: commercialProperties,
    },
    {
      title: "Industrial Properties",
      desc: "Industrial properties include warehouses, factories, and distribution centers. With the growth of e-commerce and logistics, demand for these spaces has increased significantly. They can provide long-term leases and stable income, but often require larger initial capital compared to residential or commercial investments.",
      img: industrialProperties,
    },
    {
      title: "Land & Plots",
      desc: "Investing in land and plots is ideal for those who want long-term growth potential. Raw land can be developed into residential or commercial projects in the future, depending on location and demand. While it usually doesn’t provide immediate income, it can deliver high returns if the land appreciates or is developed strategically.",
      img: landAndPlot,
    },
    {
      title: "REITs",
      desc: "Real Estate Investment Trusts (REITs) allow investors to gain exposure to the property market without owning physical real estate. By buying shares in a REIT, you indirectly invest in a portfolio of properties managed by professionals. This option is highly liquid and suitable for investors who prefer lower barriers to entry and less management responsibility.",
      img: REIT,
    },
  ];

  return (
    <section className="py-12 px-6 bg-gray-50">
      <ScrollAnimation type="fade-up">
        <div className="flex items-center justify-center mb-5">
          <TitleAtom
            title={"Types of Real Estate Investments"}
            textSizeDefault="lg"
            textSizeLarge="2xl"
          />
        </div>
      </ScrollAnimation>
      <TypesListing types={types} />
      <div className="w-full flex-col justify-center items-center mt-20">
        {types?.map((t, indx) => (
          <ScrollAnimation
            key={indx}
            type={indx % 2 === 0 ? "fade-right" : "fade-left"}
            // delay={indx / 2}
          >
            <ImageWithParagraph
              key={indx}
              title={t.title}
              image={t.img}
              paragraph={t.desc}
              imageLeft={indx % 2 === 0}
            />
          </ScrollAnimation>
        ))}
      </div>
    </section>
  );
};

export default TypesOfEstates;
