import React, { useState } from "react";
import Properties from "../Components/MainComponents/PropertiesPage/Properties";
import SideBarFilter from "../Components/MainComponents/PropertiesPage/SideBarFilter";
import SearchFilterEstates from "../Components/MainComponents/PropertiesPage/SearchFilterEstates";
import EstatesMap from "../Components/MainComponents/PropertiesPage/EstatesMap";

const PropertiesPage = () => {
  const [mapSearch, setMapSearch] = useState("");

  return (
    <div className="flex flex-col mt-20 w-full">
      <SearchFilterEstates mapSearch={mapSearch} setMapSearch={setMapSearch} />
      <div className="lg:grid lg:grid-cols-[1.25fr_1fr] md:grid md:grid-cols-[1.5fr_1fr] flex">
        <EstatesMap mapSearch={mapSearch} />

        <Properties />
      </div>
    </div>
  );
};

export default PropertiesPage;
