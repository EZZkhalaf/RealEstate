import React from "react";
import Properties from "../Components/MainComponents/PropertiesPage/Properties";
import SideBarFilter from "../Components/MainComponents/PropertiesPage/SideBarFilter";
import SearchFilterEstates from "../Components/MainComponents/PropertiesPage/SearchFilterEstates";

const PropertiesPage = () => {
  return (
    <div className="flex flex-col mt-20 w-full">
      <SearchFilterEstates />
      <div className="grid grid-cols-2">
        <div></div>
        <Properties />
      </div>
    </div>
  );
};

export default PropertiesPage;
