import React from "react";
import { Icon } from "@iconify/react";

const IconAtom = ({ icon }) => {
  return (
    <div className="bg-[#0B3557] p-2 rounded-lg w-fit h-fit flex items-center justify-center">
      <Icon icon={`mdi:${icon}`} color="white" height="30" width="30" />
    </div>
  );
};

export default IconAtom;
