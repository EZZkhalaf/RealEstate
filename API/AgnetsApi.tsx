import { buildUrl, ENDPOINTS } from "./api.config";

export async function getStaticFeaturedAgents() {
  try {
    const response = await fetch(
      buildUrl(ENDPOINTS.AGENTS.agents, {
        fields:
          "*,agent_city.name,agent_city.area.name,agent_specialties.specialty",
        limit: 4,
      })
    );

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
  const queryParts: Record<string, string> = {}; //as an obj

  if (city && city !== "All Cities") {
    queryParts["filter[agent_city][name][_eq]"] = city;
  }

  if (name && name.trim() !== "") {
    queryParts["filter[name][_icontains]"] = name;
  }

  if (agentSpecialties && agentSpecialties !== "All Specialties") {
    queryParts[`filter[specialties][_contains]`] = agentSpecialties;
  }

  const offset = (page - 1) * limit;

  try {
    const response = await fetch(
      buildUrl(ENDPOINTS.AGENTS.agents, {
        fields:
          "*,agent_city.name,agent_city.area.name,agent_specialties.specialty",
        limit,
        offset,
        meta: "*",
        ...queryParts,
      })
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

export async function getStaticLocationsAndSpecialties() {
  try {
    const response = await fetch(
      buildUrl(ENDPOINTS.ESTATES.saudi_areas, { fields: "*,cities.*" }),
      {
        next: { revalidate: 60 },
        cache: "force-cache",
      }
    );

    const result = await response.json();
    return result.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function contactAgent(
  name: string,
  phone: string,
  email: string,
  message: string,
  estate_id: number
) {
  try {
    const response = await fetch(buildUrl(ENDPOINTS.AGENTS.contact_agent), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        customer_name: name,
        phone,
        customer_email: email,
        message,
        contact_estate: estate_id,
      }),
    });

    const data = await response.json();
  } catch (error) {
    console.log(error);
  }
}
