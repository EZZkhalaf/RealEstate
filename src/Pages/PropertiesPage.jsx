import React from "react";
import Properties from "../Components/PropertiesPage/Properties";
import SideBarFilter from "../Components/PropertiesPage/SideBarFilter";

const PropertiesPage = () => {
  return (
    <div className="grid grid-cols-[1fr_4fr] mt-25 w-full">
      <div>
        <SideBarFilter />
      </div>
      <div>
        <Properties />
      </div>
    </div>
  );
};

export default PropertiesPage;
