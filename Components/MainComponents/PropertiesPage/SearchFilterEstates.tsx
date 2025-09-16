import React, { useEffect, useMemo, useState } from "react";
import InputGray from "../../Atoms/InputGray";
import { Icon } from "@iconify/react";
import TriggerButtons from "../../Atoms/TriggerButtons";
import ForSale from "../../Molecule/SearchFilterEstates/ForSale";
import Price from "../../Molecule/SearchFilterEstates/Price";
import BedsAndBaths from "../../Molecule/SearchFilterEstates/BedsAndBaths";
import HomeType from "../../Molecule/SearchFilterEstates/HomeType";
import MoreFilters from "../../Molecule/SearchFilterEstates/MoreFilters";
import debounce from "lodash.debounce";
import { FiltersInterface } from "@/app/properties/page";

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
  const options: string[] = ["All", "For Sale", "For Rent", "Sold"];
  const debouncedSearch = useMemo(
    () =>
      debounce((value: any) => {
        setMapSearch(value);
      }, 500),
    [setMapSearch]
  );

  const handleChange = (e: any) => {
    debouncedSearch(e.target.value);
  };

  return (
    <div className="fixed flex flex-col lg:grid lg:grid-cols-[1fr_2fr] md:grid md:grid-cols-[1fr_2fr] bg-white w-full gap-2 px-6 py-2 z-999   border-b border-b-gray-400 ">
      <InputGray
        type="text"
        placeholder="Address, neighborhood, city, Zip"
        icon="search"
        additionalCss={"border border-gray-400"}
        onChange={(e) => handleChange(e)}
      />

      <div className="flex flex-wrap md:flex-nowrap gap-2 md:gap-4 items-center">
        {/* For Sale */}
        <div className="flex flex-col items-start relative">
          <TriggerButtons
            text="For Sale"
            icon="arrow-down"
            onClick={() =>
              setDialogOpen(dialogOpen === "forSale" ? null : "forSale")
            }
          />
          {dialogOpen === "forSale" && (
            <div className="mt-3 z-20 ">
              <ForSale
                options={options}
                selectedOption={filters?.saleType || "All"}
                onChange={(value) =>
                  setFilters((prev) => ({ ...prev, saleType: value }))
                }
              />
            </div>
          )}
        </div>

        {/* Price */}
        <div className="flex flex-col items-start relative">
          <TriggerButtons
            text="Price"
            icon="arrow-down"
            onClick={() =>
              setDialogOpen(dialogOpen === "price" ? null : "price")
            }
          />
          {dialogOpen === "price" && (
            <div>
              <Price
                value={filters?.priceRange}
                onChange={(priceRange) =>
                  setFilters((prev) => ({ ...prev, priceRange }))
                }
              />
            </div>
          )}
        </div>

        {/* Bedrooms And Bathroms */}
        <div className="flex flex-col items-start relative">
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
            <div>
              <BedsAndBaths
                value={filters?.bedsAndBaths || {}}
                onChange={(bedsAndBaths) =>
                  setFilters((prev) => ({ ...prev, bedsAndBaths }))
                }
              />
            </div>
          )}
        </div>

        {/* Home Type */}
        <div className="flex flex-col items-start relative">
          <TriggerButtons
            text="Home Type"
            icon="arrow-down"
            onClick={() =>
              setDialogOpen(dialogOpen === "homeType" ? null : "homeType")
            }
          />
          {dialogOpen === "homeType" && (
            <div>
              <HomeType
                value={filters?.homeType || null}
                onChange={(homeType) =>
                  setFilters((prev) => ({ ...prev, homeType }))
                }
              />
            </div>
          )}
        </div>

        <div className="flex flex-col items-start relative">
          <TriggerButtons
            text="More"
            icon="arrow-down"
            onClick={() => setDialogOpen(dialogOpen === "more" ? null : "more")}
          />
          {dialogOpen === "more" && (
            <div className="left-9">
              <MoreFilters
                value={filters.otherFilters || {}}
                onChange={(updatedOtherFilters) =>
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
  );
};

export default SearchFilterEstates;
