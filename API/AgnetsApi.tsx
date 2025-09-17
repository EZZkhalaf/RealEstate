export async function getStaticFeaturedAgents() {
  try {
    const response = await fetch(`http://localhost:8055/items/agents?limit=4`);

    const result = await response.json();
    return result.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}
export async function getStaticAgents({
  page = 1,
  limit = 8,
  region = "All Regions",
  city = "All Cities",
  name = "",
  agentSpecialties = "",
}: {
  page?: number;
  limit?: number;
  region?: string;
  city?: string;
  name?: string;
  agentSpecialties?: string;
}) {
  const queryParts: string[] = [];

  // Region
  if (region && region !== "All Regions") {
    queryParts.push(`filter[region][_eq]=${encodeURIComponent(region)}`);
  }

  // City
  if (city && city !== "All Cities") {
    queryParts.push(`filter[city][_eq]=${encodeURIComponent(city)}`);
  }

  // Name (case-insensitive)
  if (name && name.trim() !== "") {
    queryParts.push(`filter[name][_icontains]=${encodeURIComponent(name)}`);
  }

  // Specialties (array of strings, _contains for each selected specialty)
  if (agentSpecialties && agentSpecialties !== "All Specialties") {
    queryParts.push(
      `filter[specialties][_contains]=${encodeURIComponent(agentSpecialties)}`
    );
  }

  const offset = (page - 1) * limit;
  const queryString = queryParts.length ? `&${queryParts.join("&")}` : "";

  try {
    const response = await fetch(
      `http://localhost:8055/items/agents?limit=${limit}&offset=${offset}&meta=*&${queryString}`
    );

    const result = await response.json();
    return {
      response: result.data,
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
    console.error("Error fetching agents:", error);
    return [];
  }
}
