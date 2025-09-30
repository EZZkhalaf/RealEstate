import { buildUrl, ENDPOINTS } from "./api.config";

// const TOKEN = "erEJU7IDSxghSVFDnwDh1ZyeELkKWnGR";
// export async function getStaticEstates(
//   page: number = 1,
//   genre: string = "All Properties",
//   sort: string | number = "Low to High"
// ) {
//   const genreFilter =
//     genre !== "All Properties"
//       ? `&filter[type][_eq]=${genre.toLowerCase()}`
//       : "";

//   let sortQuery = "";
//   if (sort === "Low to High") sortQuery = "&sort=price";
//   if (sort === "High to Low") sortQuery = "&sort=-price";
//   if (sort === "Square Footage") sortQuery = "&sort=area";
//   try {
//     const response = await fetch(
//       // `http://localhost:8055/items/estateCard?fields=id,title,estate_city.*,estate_city.area.*,type,price,estate_features,beds,baths,area,images.*&page=${page}&limit=6${genreFilter}${sortQuery}`
//       buildUrl(ENDPOINTS.ESTATES.estate_card, {fields :"id,title,estate_city.*,estate_city.area.*,type,price,estate_features,beds,baths,area,images.*" , page , limit : 6 , filter : genreFilter , sort  :sortQuery })
//     );
//     const result = await response.json();
//     // console.log(result);
//     return result.data;
//   } catch (error) {
//     console.error(error);
//     return [];
//   }
// }

export async function getStaticEstates(
  page: number = 1,
  genre: string = "All Properties",
  sort: string | number = "Low to High"
) {
  const filters: Record<string, string> = {};

  if (genre !== "All Properties") {
    filters["filter[type][_eq]"] = genre.toLowerCase();
  }

  let sortValue = "";
  if (sort === "Low to High") sortValue = "price";
  if (sort === "High to Low") sortValue = "-price";
  if (sort === "Square Footage") sortValue = "area";

  try {
    const url = buildUrl(ENDPOINTS.ESTATES.estate_card, {
      fields:
        "id,title,estate_city.*,estate_city.area.*,type,price,estate_features,beds,baths,area,images.*",
      page,
      limit: 6,
      ...(sortValue ? { sort: sortValue } : {}),
      ...filters,
    });

    const response = await fetch(url);
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error("Error fetching estates:", error);
    return [];
  }
}
export async function getStaticEstatesFiltered(
  page: number = 1,
  genre: string = "All Properties",
  sort: string = "Low to High",
  filters: any = {}
) {
  const queryParts: Record<string, string> = {};

  // Genre (property type)
  if (genre !== "All Properties") {
    queryParts[`filter[home_type][_eq]`] = genre.toLowerCase();
  }

  // Sorting
  if (sort === "Low to High") queryParts["sort"] = "price";
  if (sort === "High to Low") queryParts["sort"] = "-price";
  if (sort === "Square Footage") queryParts["sort"] = "area";

  // Beds
  if (filters?.bedsAndBaths?.beds) {
    queryParts[`filter[beds][_gte]`] = filters.bedsAndBaths.beds;
  }

  // Baths
  if (filters?.bedsAndBaths?.baths) {
    queryParts[`filter[baths][_gte]`] = filters.bedsAndBaths.baths;
  }

  // Price range
  if (filters?.priceRange?.min && filters.priceRange.min !== "0") {
    queryParts[`filter[price][_gte]`] = filters.priceRange.min;
  }
  if (filters?.priceRange?.max && filters.priceRange.max !== "0") {
    queryParts[`filter[price][_lte]`] = filters.priceRange.max;
  }

  // Sale type (For Sale, Sold, For Rent)
  if (filters.saleType && filters.saleType !== "All") {
    queryParts[`filter[sale_type][_eq]`] = filters.saleType.toLowerCase();
  }

  // View (array – match any)
  if (filters.view?.length) {
    filters.view.forEach((v: string, i: number) => {
      queryParts[`filter[otherFilters][view][_contains][${i}]`] = v;
    });
  }

  // Listing type (array – Owner posted, Agent listed, etc.)
  if (filters.listingType?.length) {
    filters.listingType.forEach((lt: string, i: number) => {
      queryParts[`filter[otherFilters][listingType][_contains][${i}]`] = lt;
    });
  }

  // Must have garage
  if (filters.mustHaveGarage === true) {
    queryParts[`filter[otherFilters][mustHaveGarage][_eq]`] = "true";
  }

  // Parking spots
  if (filters.parkingSpots) {
    queryParts[`filter[otherFilters][parkingSpots][_gte]`] =
      filters.parkingSpots;
  }

  // Location (contains text match)
  if (filters.certainLLocation) {
    queryParts[`filter[otherFilters][certainLLocation][_contains]`] =
      filters.certainLLocation;
  }

  // Offset for pagination
  const offset = (page - 1) * 6;

  try {
    const url = buildUrl(ENDPOINTS.ESTATES.estate_card, {
      fields:
        "id,title,location,special_properties,type,price,estate_features,beds,baths,area,images.*,longitude,latitude,sale_type,estate_city.*,estate_city.area.*",
      limit: 6,
      offset,
      meta: "*",
      ...queryParts,
    });

    const response = await fetch(url);
    const result = await response.json();

    return {
      data: result.data,
      pagination: result.meta?.filter_count
        ? {
            currentPage: page,
            totalItems: result.meta.filter_count,
            totalPages: Math.ceil(result.meta.filter_count / 6),
            limit: 6,
          }
        : null,
    };
  } catch (error) {
    console.error("Error fetching filtered estates:", error);
    return { data: [], pagination: null };
  }
}

export async function getStaticSingleEstate(id: string) {
  try {
    const response = await fetch(
      // `http://localhost:8055/items/estateCard/${id}?fields=*,images.*,estate_city.*,estate_city.area.*,estate_agent.*`
      buildUrl(ENDPOINTS.ESTATES.estate_info(id), {
        fields: "*,images.*,estate_city.*,estate_city.area.*,estate_agent.*",
      })
    );

    const result = await response.json();
    return result.data; // this will be the single estate object
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function getStaticSearchEstateFields() {
  try {
    const response = await fetch(
      // `http://localhost:8055/items/Estate_filtering_options?fields=*,sale_type.*`
      buildUrl(ENDPOINTS.ESTATES.estate_filtering_options, {
        fields: "*,sale_type.*",
      })
    );

    const result = await response.json();
    return result.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function getStaticInvestementEstates() {
  try {
    const response = await fetch(
      // `http://localhost:8055/items/invest_estates?fields=*,location.item.*,financials.item.*,images.*`
      buildUrl(ENDPOINTS.INVEST.invest_estates, {
        fields: "*,location.item.*,financials.item.*,images.*",
      })
    );

    const result = await response.json();
    return result.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}
