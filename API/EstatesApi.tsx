const TOKEN = "erEJU7IDSxghSVFDnwDh1ZyeELkKWnGR";
export async function getStaticEstates(
  page: number = 1,
  genre: string = "All Properties",
  sort: string = "Low to High"
) {
  const genreFilter =
    genre !== "All Properties"
      ? `&filter[type][_eq]=${genre.toLowerCase()}`
      : "";

  let sortQuery = "";
  if (sort === "Low to High") sortQuery = "&sort=price";
  if (sort === "High to Low") sortQuery = "&sort=-price";
  if (sort === "Square Footage") sortQuery = "&sort=area";
  try {
    const response = await fetch(
      `http://localhost:8055/items/estateCard?page=${page}&limit=6${genreFilter}${sortQuery}`
    );
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

// export async function getStaticEstatesFiltered(
//   page: number = 1,
//   genre: string = "All Properties",
//   sort: string = "Low to High",
//   filters: any = {}
// ) {
// const queryParts: string[] = [];

// // Genre (property type)
// if (genre !== "All Properties") {
//   queryParts.push(`filter[homeType][_eq]=${genre.toLowerCase()}`);
// }

// // Sorting
// if (sort === "Low to High") queryParts.push("sort=price");
// if (sort === "High to Low") queryParts.push("sort=-price");
// if (sort === "Square Footage") queryParts.push("sort=area");

// // Beds
// if (filters?.bedsAndBaths?.beds) {
//   queryParts.push(`filter[beds][_gte]=${filters.bedsAndBaths.beds}`);
// }

// // Baths
// if (filters?.bedsAndBaths?.baths) {
//   queryParts.push(`filter[baths][_gte]=${filters.bedsAndBaths.baths}`);
// }

// // Sale type (For Sale, Sold, For Rent)
// if (filters.saleType && filters.saleType !== "All") {
//   queryParts.push(`filter[saleType][_eq]=${filters.saleType}`);
// }

// // View (array – match any)
// if (filters.view?.length) {
//   filters.view.forEach((v: string) =>
//     queryParts.push(`filter[otherFilters][view][_contains]=${v}`)
//   );
// }

// // Listing type (array – Owner posted, Agent listed, etc.)
// if (filters.listingType?.length) {
//   filters.listingType.forEach((lt: string) =>
//     queryParts.push(`filter[otherFilters][listingType][_contains]=${lt}`)
//   );
// }

// // Must have garage
// if (filters.mustHaveGarage === true) {
//   queryParts.push(`filter[otherFilters][mustHaveGarage][_eq]=true`);
// }

// // Parking spots
// if (filters.parkingSpots) {
//   queryParts.push(
//     `filter[otherFilters][parkingSpots][_gte]=${filters.parkingSpots}`
//   );
// }

// // Location (contains text match)
// if (filters.certainLLocation) {
//   queryParts.push(
//     `filter[otherFilters][certainLLocation][_contains]=${filters.certainLLocation}`
//   );
// }

//   // Combine
//   const queryString = queryParts.length ? `&${queryParts.join("&")}` : "";

//   try {
//     const response = await fetch(
//       `http://localhost:8055/items/estateCard?page=${page}&limit=6&meta=*${queryString}`
//     );
//     const result = await response.json();
//     return {
//       data: result.data,
//       pagination: result?.meta?.page
//         ? {
//             currentPage: result.meta.page.page,
//             totalPages: result.meta.page.total,
//             totalItems: result.meta.filter_count || result.meta.total_count,
//             limit: result.meta.page.limit,
//           }
//         : null,
//     };
//   } catch (error) {
//     console.error(error);
//     return [];
//   }
// }

export async function getStaticEstatesFiltered(
  page: number = 1,
  genre: string = "All Properties",
  sort: string = "Low to High",
  filters: any = {}
) {
  const queryParts: string[] = [];

  // Genre (property type)
  if (genre !== "All Properties") {
    queryParts.push(`filter[homeType][_eq]=${genre.toLowerCase()}`);
  }

  // Sorting
  if (sort === "Low to High") queryParts.push("sort=price");
  if (sort === "High to Low") queryParts.push("sort=-price");
  if (sort === "Square Footage") queryParts.push("sort=area");

  // Beds
  if (filters?.bedsAndBaths?.beds) {
    queryParts.push(`filter[beds][_gte]=${filters.bedsAndBaths.beds}`);
  }

  // Baths
  if (filters?.bedsAndBaths?.baths) {
    queryParts.push(`filter[baths][_gte]=${filters.bedsAndBaths.baths}`);
  }

  // Sale type (For Sale, Sold, For Rent)
  if (filters.saleType && filters.saleType !== "All") {
    queryParts.push(`filter[saleType][_eq]=${filters.saleType}`);
  }

  // View (array – match any)
  if (filters.view?.length) {
    filters.view.forEach((v: string) =>
      queryParts.push(`filter[otherFilters][view][_contains]=${v}`)
    );
  }

  // Listing type (array – Owner posted, Agent listed, etc.)
  if (filters.listingType?.length) {
    filters.listingType.forEach((lt: string) =>
      queryParts.push(`filter[otherFilters][listingType][_contains]=${lt}`)
    );
  }

  // Must have garage
  if (filters.mustHaveGarage === true) {
    queryParts.push(`filter[otherFilters][mustHaveGarage][_eq]=true`);
  }

  // Parking spots
  if (filters.parkingSpots) {
    queryParts.push(
      `filter[otherFilters][parkingSpots][_gte]=${filters.parkingSpots}`
    );
  }

  // Location (contains text match)
  if (filters.certainLLocation) {
    queryParts.push(
      `filter[otherFilters][certainLLocation][_contains]=${filters.certainLLocation}`
    );
  }

  // 👇 use offset instead of page
  const offset = (page - 1) * 6;
  const queryString = queryParts.length ? `&${queryParts.join("&")}` : "";

  try {
    const response = await fetch(
      `http://localhost:8055/items/estateCard?limit=6&offset=${offset}&meta=*${queryString}`
    );
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
    console.error(error);
    return { data: [], pagination: null };
  }
}

export async function getStaticSingleEstate(id: string) {
  try {
    const response = await fetch(
      `http://localhost:8055/items/estateDetail/${id}` // <- use /collectionName/:id
    );

    const result = await response.json();
    return result.data; // this will be the single estate object
  } catch (error) {
    console.log(error);
    return error;
  }
}
