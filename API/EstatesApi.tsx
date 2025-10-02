import { buildUrl, ENDPOINTS } from "./api.config";
import { client } from "./GraphQueries/graphql";
import {
  getSimilarEstatesQuery,
  getStaticEstatesFilteredQuery,
} from "./GraphQueries/queries";

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
        "id,title,estate_city.*,estate_city.area.*,home_type,price,estate_features,beds,baths,area,images.*",
      page,
      limit: 6,
      ...(sortValue ? { sort: sortValue } : {}),
      ...filters,
    });

    const response = await fetch(url);
    const result = await response.json();
    console.log(response);
    return result.data;
  } catch (error) {
    console.error("Error fetching estates:", error);
    return [];
  }
}

export async function getSimilarEstates(city: string, estate_id: number) {
  try {
    const filter = {
      estate_city: { name: { _eq: city } },
      id: { _neq: estate_id },
    };

    const response: any = await client.request(getSimilarEstatesQuery, {
      filter,
      limit: 3,
    });
    console.log(response);

    return response.estateCard;
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
  const limit = 6;
  const offset = (page - 1) * limit;

  // Build GraphQL filter object
  const filter: any = {};

  if (genre !== "All Properties") {
    filter.home_type = { _eq: genre.toLowerCase() };
  }

  if (filters?.bedsAndBaths?.beds) {
    filter.beds = { _gte: filters.bedsAndBaths.beds };
  }

  if (filters?.bedsAndBaths?.baths) {
    filter.baths = { _gte: filters.bedsAndBaths.baths };
  }

  if (filters?.priceRange?.min && filters.priceRange.min !== "0") {
    filter.price = { ...(filter.price || {}), _gte: filters.priceRange.min };
  }

  if (filters?.priceRange?.max && filters.priceRange.max !== "0") {
    filter.price = { ...(filter.price || {}), _lte: filters.priceRange.max };
  }

  if (filters.saleType && filters.saleType !== "All") {
    filter.sale_type = { _eq: filters.saleType.toLowerCase() };
  }

  // Sorting
  let sortOption: string[] = [];
  if (sort === "Low to High") sortOption = ["price"];
  if (sort === "High to Low") sortOption = ["-price"];
  if (sort === "Square Footage") sortOption = ["area"];

  // Request
  const data: any = await client.request(getStaticEstatesFilteredQuery, {
    filter,
    limit,
    offset,
    sort: sortOption,
  });

  return {
    data: data.estateCard,
    pagination: {
      currentPage: page,
      totalItems: data.estateCard.length,
      totalPages: Math.ceil(data.estateCard.length / limit),
      limit,
    },
  };
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
        fields:
          "*,location.item.*,financials.item.*,images.*,estate_city.name,estate_city.area.name",
      })
    );

    const result = await response.json();
    return result.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}
