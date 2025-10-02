import React, { useEffect, useMemo, useState } from "react";
import InputGray from "../../../Components/Atoms/InputGray";
import { Icon } from "@iconify/react";
import TriggerButtons from "../../../Components/Atoms/TriggerButtons";
import ForSale from "../../../Components/Molecule/SearchFilterEstates/ForSale";
import Price from "../../../Components/Molecule/SearchFilterEstates/Price";
import BedsAndBaths from "../../../Components/Molecule/SearchFilterEstates/BedsAndBaths";
import HomeType from "../../../Components/Molecule/SearchFilterEstates/HomeType";
import MoreFilters from "../../../Components/Molecule/SearchFilterEstates/MoreFilters";
import debounce from "lodash.debounce";
import { getStaticSearchEstateFields } from "@/API/EstatesApi";
import { FiltersInterface } from "@/Interface/ServicesInterface";

interface SearchFilterEstatesInterface {
  mapSearch?: string;
  setMapSearch: any;
  filters: FiltersInterface;
  setFilters: React.Dispatch<React.SetStateAction<FiltersInterface>>;
}

const SearchFilterEstates: React.FC<SearchFilterEstatesInterface> = ({
  mapSearch,
  setMapSearch,
  filters,
  setFilters,
}) => {
  const [dialogOpen, setDialogOpen] = useState<any>(null);
  const [saleTypes, setSaleTypes] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<{
    min: number[];
    max: number[];
    monthlyPayment: number[];
    creditScore: number[];
  }>({ min: [], max: [], monthlyPayment: [], creditScore: [] });

  const [bedsAndBaths, setBedsAndBaths] = useState<{
    beds: number[];
    baths: number[];
  }>({ beds: [], baths: [] });

  const [homeTypes, setHomeTypes] = useState<string[]>([]);

  const debouncedSearch = useMemo(
    () =>
      debounce((value: any) => {
        setMapSearch(value);
      }, 500),
    [setMapSearch]
  );

  const fetchSearchField = async () => {
    const cached = localStorage.getItem("filters");

    if (cached) {
      const parsed = JSON.parse(cached);
      setFilters(parsed);
      parseFilters(parsed);
      // localStorage.removeItem("filters");
      return;
    }

    const response = await getStaticSearchEstateFields();
    setFilters(response);
    localStorage.setItem("filters", JSON.stringify(response));
    parseFilters(response);
  };

  const parseFilters = (response: any) => {
    const saleTypesCleared: string[] =
      response?.sale_type?.blocks?.map(
        (block: any) => (block?.data?.text as string) || ""
      ) || [];

    const minCleared: number[] = response?.min?.blocks?.map(
      (block: any) => Number(block.data.text) as number
    );
    const maxCleared: number[] = response?.max?.blocks?.map(
      (block: any) => Number(block.data.text) as number
    );

    const downPaymentCleared: number[] = response?.down_payment?.blocks?.map(
      (block: any) => Number(block.data.text) as number
    );
    const creditScoreCleared: number[] = response?.credit_score?.blocks?.map(
      (block: any) => Number(block.data.text) as number
    );

    const bedsCleared: number[] = response?.bedrooms?.blocks?.map(
      (block: any) => Number(block.data.text) as number
    );
    const bathsCleared: number[] = response?.bathrooms?.blocks?.map(
      (block: any) => Number(block.data.text) as number
    );

    const homeTypesCleared: string[] =
      response?.home_type?.blocks?.map(
        (block: any) => (block?.data?.text as string) || ""
      ) || [];

    setSaleTypes(saleTypesCleared);
    setPriceRange({
      min: minCleared,
      max: maxCleared,
      monthlyPayment: downPaymentCleared,
      creditScore: creditScoreCleared,
    });
    setBedsAndBaths({ beds: bedsCleared, baths: bathsCleared });
    setHomeTypes(homeTypesCleared);
  };

  useEffect(() => {
    fetchSearchField();
  }, []);
  const handleChange = (e: any) => {
    debouncedSearch(e.target.value);
  };

  return (
    <div className="fixed top-15 left-0 w-full bg-white border-b border-gray-400 z-[50]">
      <div className="max-w-7xl mx-auto px-4 py-4 grid lg:grid-cols-2 md:grid-cols-2 gric-cols-1 gap-4">
        {/* Search Input */}
        <div className="w-full ">
          <InputGray
            type="text"
            placeholder="Address, neighborhood, city, Zip"
            icon="search"
            additionalCss="border border-gray-400 w-full"
            onChange={handleChange}
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap md:flex-nowrap gap-2 md:gap-4 items-center w-full md:w-2/3">
          {/* Status / For Sale */}
          <div className="relative">
            <TriggerButtons
              text="Status"
              icon="arrow-down"
              onClick={() =>
                setDialogOpen(dialogOpen === "forSale" ? null : "forSale")
              }
            />
            {dialogOpen === "forSale" && (
              <div className="absolute top-full mt-2 z-[50] w-[200px] md:w-[250px] lg:w-[300px]">
                <ForSale
                  options={saleTypes}
                  selectedOption={filters?.saleType || "All"}
                  onChange={(value) =>
                    setFilters((prev) => ({ ...prev, saleType: value }))
                  }
                />
              </div>
            )}
          </div>

          {/* Price */}
          <div className="relative">
            <TriggerButtons
              text="Price"
              icon="arrow-down"
              onClick={() =>
                setDialogOpen(dialogOpen === "price" ? null : "price")
              }
            />
            {dialogOpen === "price" && (
              <div className="absolute top-full mt-2 z-[50] w-[200px] md:w-[250px] lg:w-[300px]">
                <Price
                  options={priceRange}
                  value={filters?.priceRange}
                  onChange={(priceRange: any) =>
                    setFilters((prev) => ({ ...prev, priceRange }))
                  }
                />
              </div>
            )}
          </div>

          {/* Beds & Baths */}
          <div className="relative">
            <TriggerButtons
              text="Beds & Baths"
              icon="arrow-down"
              onClick={() =>
                setDialogOpen(
                  dialogOpen === "bedsAndBaths" ? null : "bedsAndBaths"
                )
              }
            />
            {dialogOpen === "bedsAndBaths" && (
              <div className="absolute top-full mt-2 z-[50] w-[200px] md:w-[250px] lg:w-[300px]">
                <BedsAndBaths
                  bedsAndBaths={bedsAndBaths}
                  value={filters?.bedsAndBaths || {}}
                  onChange={(bedsAndBaths) =>
                    setFilters((prev: any) => ({ ...prev, bedsAndBaths }))
                  }
                />
              </div>
            )}
          </div>

          {/* Home Type */}
          <div className="relative">
            <TriggerButtons
              text="Home Type"
              icon="arrow-down"
              onClick={() =>
                setDialogOpen(dialogOpen === "homeType" ? null : "homeType")
              }
            />
            {dialogOpen === "homeType" && (
              <div className="absolute top-full mt-2 z-[50] w-[200px] md:w-[250px] lg:w-[300px]">
                <HomeType
                  options={homeTypes}
                  value={filters?.homeType || null}
                  onChange={(homeType) =>
                    setFilters((prev) => ({ ...prev, homeType }))
                  }
                />
              </div>
            )}
          </div>

          {/* More Filters */}
          <div className="relative">
            <TriggerButtons
              text="More"
              icon="arrow-down"
              onClick={() =>
                setDialogOpen(dialogOpen === "more" ? null : "more")
              }
            />
            {dialogOpen === "more" && (
              <div className="absolute top-full mt-2 z-[50] w-[250px] md:w-[300px] lg:w-[350px]">
                <MoreFilters
                  value={filters.otherFilters || {}}
                  onChange={(updatedOtherFilters: any) =>
                    setFilters((prev) => ({
                      ...prev,
                      otherFilters: updatedOtherFilters,
                    }))
                  }
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFilterEstates;
