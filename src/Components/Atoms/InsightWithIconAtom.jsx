import { Icon } from "@iconify/react";
import React from "react";

const InsightWithIconAtom = ({ name, icon, value }) => {
  return (
    <div className="flex flex-row gap-1 text-sm items-center px-2">
      <p>
        <Icon icon={`mdi:${icon}`} height="25" width="25" />
      </p>
      <p>
        {name} this year : {value}%
      </p>
    </div>
  );
};

export default InsightWithIconAtom;
