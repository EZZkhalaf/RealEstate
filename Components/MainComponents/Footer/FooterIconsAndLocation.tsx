import React from "react";
import { Icon } from "@iconify/react";

const FooterIconsAndLocation = () => {
  return (
    <div className="flex flex-col mt-9">
      <p className="text-gray-400 text-sm">
        Saudi Arabia's premier real estate platform connecting buyers, sellers,
        and investors with expert agents.
      </p>
      <div className="flex gap-2 mt-2">
        <Icon icon={`mdi:facebook`} color="white" height="30" width="30" />
        <Icon icon={`mdi:twitter`} color="white" height="30" width="30" />
        <Icon icon={`mdi:instagram`} color="white" height="30" width="30" />
      </div>
    </div>
  );
};

export default FooterIconsAndLocation;
