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

const SearchFilterEstates = ({ mapSearch, setMapSearch }) => {
  const [dialogOpen, setDialogOpen] = useState(null);
  const options = ["For Sale", "For Rent", "Sold"];
  const [selectedOption, setSelectedOption] = useState("For Sale");

  // create debounced handler
  const debouncedSearch = useMemo(
    () =>
      debounce((value) => {
        setMapSearch(value);
      }, 500), // wait 500ms after user stops typing
    [setMapSearch]
  );

  const handleChange = (e) => {
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
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
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
              <Price />
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
              <BedsAndBaths />
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
              <HomeType />
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
            <div className="">
              <MoreFilters />
            </div>
          )}
        </div>
        {/* Save Search button */}
        <button className="py-1 px-2 bg-blue-400 hover:bg-blue-500 text-white font-semibold flex justify-center items-center rounded-sm border border-gray-400 whitespace-nowrap transition-colors duration-300">
          <span className="mr-2">Save Search</span>
        </button>
      </div>
    </div>
  );
};

export default SearchFilterEstates;
