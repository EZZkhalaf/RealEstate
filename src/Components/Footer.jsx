import React from "react";
import TermsAndPolicies from "./MainComponents/Footer/TermsAndPolicies";
import FooterColumns from "./MainComponents/Footer/FooterColumns";
import FooterIconsAndLocation from "./MainComponents/Footer/FooterIconsAndLocation";

const Footer = () => {
  const menuData = [
    {
      title: "Services",
      items: [
        "Buy Property",
        "Sell Property",
        "Investment",
        "Property Management",
        "Valuation",
      ],
    },
    {
      title: "Locations",
      items: ["Riyadh", "Jeddah", "Dammam", "Mecca", "Medina"],
    },
    {
      title: "Contact",
      items: [
        "+966 11 123 4567",
        "info@premiumrealestate.sa",
        "King Fahd Road, Riyadh, Saudi Arabia",
      ],
    },
  ];

  return (
    <div className="bg-gray-900 text-white py-16 min-w-full flex justify-center px-5 lg:px-12">
      <div className="flex flex-col justify-center">
        <div className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1   gap-4 px-4">
          <FooterIconsAndLocation />
          {menuData.map((col, index) => (
            <FooterColumns key={index} title={col.title} elements={col.items} />
          ))}
        </div>

        <TermsAndPolicies />
      </div>
    </div>
  );
};

export default Footer;
