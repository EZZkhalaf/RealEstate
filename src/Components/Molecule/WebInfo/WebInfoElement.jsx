import React from "react";
import { Icon } from "@iconify/react";
const WebInfoElement = ({ info }) => {
  return (
    <div className="flex flex-col gap-6 text-white mt-2">
      <div className="flex  items-center gap-5">
        <Icon icon={`${info.icon}`} color="white" height="30" width="30" />
        <div className="flex flex-col ">
          <p className="font-semibold">{info.type}</p>
          <p>{info.value}</p>
        </div>
      </div>
    </div>
  );
};

export default WebInfoElement;

//   type: "Visit Us",
//   value: "King Fahd Road, Riyadh",
//   icon: "mdi:map-marker",
