"use client";

import { getStaticEstatesFiltered } from "@/API/EstatesApi";
import Properties from "@/app/properties/Components/Properties";
import SearchFilterEstates from "@/app/properties/Components/SearchFilterEstates";
import { EstateInterface } from "@/Interface/EstateInterface";
import { FiltersInterface } from "@/Interface/ServicesInterface";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
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

  const totalCount: number = 9002;
  const router = useRouter();

  const [estates, setEstates] = useState<EstateInterface[]>([]);
  const [selectedEstate, setSelectedEstate] = useState<EstateInterface | null>(
    null
  );

  const [currentPage, onPageChange] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  // const saudiLocations = [
  //   { name: "Riyadh", coords: [24.7136, 46.6753] },
  //   { name: "Jeddah", coords: [21.4858, 21.4858] },
  //   { name: "Mecca", coords: [21.3891, 39.8579] },
  //   { name: "Medina", coords: [24.5247, 39.5692] },
  //   { name: "Dammam", coords: [26.3927, 49.9777] },
  //   { name: "Khobar", coords: [26.2172, 50.197] },
  //   { name: "Tabuk", coords: [28.3906, 36.5656] },
  //   { name: "Al-Khobar", coords: [26.295, 50.198] },
  //   { name: "Abha", coords: [18.2163, 42.5053] },
  //   { name: "Hail", coords: [27.5114, 41.7208] },
  //   { name: "Al-Ahsa", coords: [25.3833, 49.5833] },
  //   { name: "Najran", coords: [17.565, 44.2286] },
  //   { name: "Yanbu", coords: [24.0893, 38.0498] },
  //   { name: "Taif", coords: [21.2854, 40.4262] },
  //   { name: "Al-Madinah", coords: [24.47, 39.6111] },
  // ];

  const [saudiLocations, setLocations] = useState<
    { coords: [number, number] }[]
  >([
    { coords: [24.7136, 46.6753] }, // Jeddah
  ]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const fetchEstates = async () => {
    const response = await getStaticEstatesFiltered(
      currentPage,
      filters?.homeType || "All Properties",
      filters?.sort || "Low to High",
      filters
    );
    setEstates(response.data);
    const locations = response.data
      ?.filter((estate: any) => estate.latitude && estate.longitude)
      .map((estate: any) => ({
        coords: [parseFloat(estate.latitude), parseFloat(estate.longitude)] as [
          number,
          number
        ],
      }));
    setLocations(locations);
    setTotalPages(response?.pagination?.totalPages as number);
  };
  useEffect(() => {
    fetchEstates();
    scrollToTop();
  }, [filters, currentPage]);
  console.log(saudiLocations);

  return (
    <div className="flex flex-col mt-20 w-full">
      <SearchFilterEstates
        mapSearch={mapSearch}
        setMapSearch={setMapSearch}
        filters={filters}
        setFilters={setFilters}
      />

      <div className="lg:grid lg:grid-cols-[1.25fr_1fr] md:grid md:grid-cols-[1.5fr_1fr] flex">
        <EstatesMap markersLocations={saudiLocations} mapSearch={mapSearch} />

        <Properties
          router={router}
          estates={estates}
          selectedEstate={selectedEstate}
          setSelectedEstate={setSelectedEstate}
          currentPage={currentPage}
          totalPages={totalPages}
          totalCount={totalCount}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
}
