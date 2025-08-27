import React from "react";
import { Icon } from "@iconify/react";
const FooterColumns = ({ title, elements }) => {
  return (
    <div className="flex flex-col gap-2 text-white">
      <h1 className="text-white font-bold text-sm">{title}</h1>
      <div className="grid grid-cols-1 gap-1">
        {elements.map((e, index) => (
          <a href={"any"} target="_blank" key={index} className="text-gray-400">
            {e}
          </a>
        ))}
      </div>
    </div>
  );
};

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
    <div className="bg-gray-900 text-white py-16 w-full flex justify-center px-12">
      <div className="flex flex-col justify-center">
        <div className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1   gap-8">
          <div className="flex flex-col mt-9">
            <p className="text-gray-400 text-sm">
              Saudi Arabia's premier real estate platform connecting buyers,
              sellers, and investors with expert agents.
            </p>
            <div className="flex gap-2 mt-2">
              <Icon
                icon={`mdi:facebook`}
                color="white"
                height="30"
                width="30"
              />
              <Icon icon={`mdi:twitter`} color="white" height="30" width="30" />
              <Icon
                icon={`mdi:instagram`}
                color="white"
                height="30"
                width="30"
              />
            </div>
          </div>
          {menuData.map((col) => (
            <FooterColumns title={col.title} elements={col.items} />
          ))}
        </div>

        <div className="border-t border-gray-400 flex justify-between mt-8 ">
          <p className="text-sm text-gray-400 mt-4">
            © 2024 Premium Real Estate. All rights reserved.
          </p>
          <div className="flex gap-2 mt-4">
            <p className="text-sm text-gray-400">Privacy Policy</p>
            <p className="text-sm text-gray-400">Terms of Service</p>
            <p className="text-sm text-gray-400">Cookie Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
