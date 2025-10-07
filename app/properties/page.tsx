// "use client";

// import { getStaticEstatesFiltered } from "@/API/EstatesApi";
// import Properties from "@/app/properties/Components/Properties";
// import SearchFilterEstates from "@/app/properties/Components/SearchFilterEstates";
// import { EstateInterface } from "@/Interface/EstateInterface";
// import { FiltersInterface } from "@/Interface/ServicesInterface";
// import dynamic from "next/dynamic";
// import { useEffect, useState } from "react";

// const EstatesMap = dynamic(
//   () => import("@/app/properties/Components/EstatesMap"),
//   { ssr: false }
// );

// export default function PropertiesPage() {
//   const [mapSearch, setMapSearch] = useState<string>("");
//   const [filters, setFilters] = useState<FiltersInterface>({});

//   const totalCount: number = 9002;

//   const [estates, setEstates] = useState<EstateInterface[]>([]);
//   const [selectedEstate, setSelectedEstate] = useState<EstateInterface | null>(
//     null
//   );
//   const [pressedEstate, setPressedEstate] = useState<EstateInterface | null>(
//     null
//   );

//   const [currentPage, onPageChange] = useState<number>(1);
//   const [totalPages, setTotalPages] = useState<number>(0);

//   const [saudiLocations, setLocations] = useState<
//     { coords: [number, number] }[]
//   >([{ coords: [24.7136, 46.6753] }]);

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   useEffect(() => {
//     // If filters change, always reset to page 1
//     onPageChange(1);
//   }, [filters]);

//   useEffect(() => {
//     // Fetch estates whenever page or filters change
//     const fetchEstates = async () => {
//       const response = await getStaticEstatesFiltered(
//         currentPage,
//         filters?.homeType || "All Properties",
//         filters?.sort || "Low to High",
//         filters
//       );

//       setEstates(response.data);
//       const locations = response.data
//         ?.filter((estate: any) => estate.latitude && estate.longitude)
//         .map((estate: any) => ({
//           coords: [
//             parseFloat(estate.latitude),
//             parseFloat(estate.longitude),
//           ] as [number, number],
//         }));

//       setLocations(locations);
//       setTotalPages(response?.pagination?.totalPages as number);
//     };

//     fetchEstates();
//     scrollToTop();
//   }, [currentPage, filters]);
//   return (
//     <div className="flex flex-col mt-22 sm:mt-15 w-full">
//       <SearchFilterEstates
//         // mapSearch={mapSearch}
//         setMapSearch={setMapSearch}
//         filters={filters}
//         setFilters={setFilters}
//       />

//       <div className="lg:grid lg:grid-cols-[1.25fr_1fr] md:grid md:grid-cols-[1.5fr_1fr] flex">
//         <EstatesMap
//           markersLocations={saudiLocations}
//           mapSearch={mapSearch}
//           zoomCoords={
//             pressedEstate
//               ? [
//                   parseFloat(pressedEstate.latitude),
//                   parseFloat(pressedEstate.longitude),
//                 ]
//               : null
//           }
//         />

//         <Properties
//           // router={router}
//           estates={estates}
//           selectedEstate={selectedEstate}
//           setSelectedEstate={setSelectedEstate}
//           currentPage={currentPage}
//           totalPages={totalPages}
//           totalCount={totalCount}
//           onPageChange={onPageChange}
//           // pressedEstate={pressedEstate}
//           setPressedEstate={setPressedEstate}
//         />
//       </div>
//     </div>
//   );
// }

"use client";

import { getStaticEstatesFiltered } from "@/API/EstatesApi";
import Properties from "@/app/properties/Components/Properties";
import SearchFilterEstates from "@/app/properties/Components/SearchFilterEstates";
import { EstateInterface } from "@/Interface/EstateInterface";
import { FiltersInterface } from "@/Interface/ServicesInterface";
import { useQuery } from "@tanstack/react-query";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const EstatesMap = dynamic(
  () => import("@/app/properties/Components/EstatesMap"),
  { ssr: false }
);

export default function PropertiesPage() {
  const [mapSearch, setMapSearch] = useState<string>("");
  const [filters, setFilters] = useState<FiltersInterface>({});
  const totalCount: number = 9002;
  const [selectedEstate, setSelectedEstate] = useState<EstateInterface | null>(
    null
  );
  const [pressedEstate, setPressedEstate] = useState<EstateInterface | null>(
    null
  );

  const [currentPage, onPageChange] = useState<number>(1);

  useEffect(() => {
    // if filters change, always reset to page 1
    onPageChange(1);
  }, [filters]);

  const { data, isLoading, isError, isFetching } = useQuery({
    queryKey: ["estates", currentPage, filters],
    queryFn: async () => {
      const response = await getStaticEstatesFiltered(
        currentPage,
        filters?.homeType || "All Properties",
        filters?.sort || "Low to High",
        filters
      );
      return response;
    },
  });

  const estates: EstateInterface[] = data?.data ?? [];
  const totalPages: number = data?.pagination?.totalPages ?? 0;

  // if (isLoading && !data) return <Loading />;
  if (isError) return <p>Something went wrong while fetching properties.</p>;

  const saudiLocations = estates
    ?.filter((estate: any) => estate.latitude && estate.longitude)
    .map((estate: any) => ({
      coords: [parseFloat(estate.latitude), parseFloat(estate.longitude)] as [
        number,
        number
      ],
    })) ?? [{ coords: [24.7136, 46.6753] }];

  return (
    <div className="flex flex-col mt-22 sm:mt-15 w-full">
      <SearchFilterEstates
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
          estates={estates}
          selectedEstate={selectedEstate}
          setSelectedEstate={setSelectedEstate}
          currentPage={currentPage}
          totalPages={totalPages}
          totalCount={totalCount}
          onPageChange={onPageChange}
          setPressedEstate={setPressedEstate}
        />
      </div>
    </div>
  );
}
