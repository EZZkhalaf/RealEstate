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
  const [filters, setFilters] = useState<FiltersInterface>({});

  const totalCount: number = 9002;
  const router = useRouter();

  const [estates, setEstates] = useState<EstateInterface[]>([]);
  const [selectedEstate, setSelectedEstate] = useState<EstateInterface | null>(
    null
  );
  const [pressedEstate, setPressedEstate] = useState<EstateInterface | null>(
    null
  );

  const [currentPage, onPageChange] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

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

  // console.log(estates);
  return (
    <div className="flex flex-col mt-20 w-full">
      <SearchFilterEstates
        mapSearch={mapSearch}
        setMapSearch={setMapSearch}
        filters={filters}
        setFilters={setFilters}
      />

      <div className="lg:grid lg:grid-cols-[1.25fr_1fr] md:grid md:grid-cols-[1.5fr_1fr] flex">
        <EstatesMap
          markersLocations={saudiLocations}
          mapSearch={mapSearch}
          zoomCoords={
            pressedEstate
              ? [
                  parseFloat(pressedEstate.latitude),
                  parseFloat(pressedEstate.longitude),
                ]
              : null
          }
        />

        <Properties
          router={router}
          estates={estates}
          selectedEstate={selectedEstate}
          setSelectedEstate={setSelectedEstate}
          currentPage={currentPage}
          totalPages={totalPages}
          totalCount={totalCount}
          onPageChange={onPageChange}
          pressedEstate={pressedEstate}
          setPressedEstate={setPressedEstate}
        />
      </div>
    </div>
  );
}
