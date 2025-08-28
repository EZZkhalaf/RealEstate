import React from "react";
import { Icon } from "@iconify/react";

const BestPerformingAreasListing = ({ bestAreas }) => {
  return (
    <div className="flex flex-row items-center px-2 mt-3 gap-1 text-sm">
      <Icon icon={`mdi:chart-pie`} height="25" width="25" />
      <p className="flex flex-row items-center">
        Best performing areas : {bestAreas.join(", ")}
      </p>
    </div>
  );
};

export default BestPerformingAreasListing;
