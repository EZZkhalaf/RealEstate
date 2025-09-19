"use client";

import Properties from "@/app/properties/Components/Properties";
import SearchFilterEstates from "@/app/properties/Components/SearchFilterEstates";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

export interface FiltersInterface {
  saleType?: string; // "For Sale", "For Rent", etc.
  priceRange?: { min: number; max: number };
  bedsAndBaths?: { beds: number; baths: number };
  sort?: any;
  beds?: number;
  baths?: number;
  homeType?: string;
  moreFilters?: Record<string, any>;
  otherFilters?: {
    maxHOA?: number;
    listingType?: string[];
    propertyStatus: string;
    Tours?: string[];
    parkingSpots?: number;
    mustHaveGarage?: boolean;
    LotSize?: { min: number; max: number };
    hasBasement?: boolean;
    singleStoryOnly?: boolean;
    comms55?: string;
    view?: string[];
    certainLLocation?: string;
  };
}
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
