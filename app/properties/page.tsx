"use client";

import Properties from "@/app/properties/Components/Properties";
import SearchFilterEstates from "@/app/properties/Components/SearchFilterEstates";
import { FiltersInterface } from "@/Interface/ServicesInterface";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const EstatesMap = dynamic(
  () => import("@/app/properties/Components/EstatesMap"),
  { ssr: false }
);

export default function PropertiesPage() {
  const [mapSearch, setMapSearch] = useState<string>("");
  const [filters, setFilters] = useState<FiltersInterface>({
    saleType: "All",
  });

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
      <SearchFilterEstates
        mapSearch={mapSearch}
        setMapSearch={setMapSearch}
        filters={filters}
        setFilters={setFilters}
      />

      <div className="lg:grid lg:grid-cols-[1.25fr_1fr] md:grid md:grid-cols-[1.5fr_1fr] flex">
        <EstatesMap mapSearch={mapSearch} />

        <Properties filters={filters} />
      </div>
    </div>
  );
}
