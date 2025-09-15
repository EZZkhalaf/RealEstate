"use client";

import Properties from "@/Components/MainComponents/PropertiesPage/Properties";
// import EstatesMap from "@/Components/MainComponents/PropertiesPage/EstatesMap";
import SearchFilterEstates from "@/Components/MainComponents/PropertiesPage/SearchFilterEstates";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const EstatesMap = dynamic(
  () => import("@/Components/MainComponents/PropertiesPage/EstatesMap"),
  { ssr: false }
);

export default function PropertiesPage() {
  const [mapSearch, setMapSearch] = useState<string>("");
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <div className="flex flex-col mt-20 w-full">
      <SearchFilterEstates mapSearch={mapSearch} setMapSearch={setMapSearch} />

      <div className="lg:grid lg:grid-cols-[1.25fr_1fr] md:grid md:grid-cols-[1.5fr_1fr] flex">
        <EstatesMap mapSearch={mapSearch} />

        <Properties />
      </div>
    </div>
  );
}
