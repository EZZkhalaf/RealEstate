export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const ENDPOINTS = {
  AGENTS: {
    agents: "/items/agents",
    contact_agent: "/items/contact_requests",
  },
  ESTATES: {
    estate_card: "/items/estateCard",
    estate_info: (id: string | number) => `/items/estateCard/${id}`,
    saudi_areas: "/items/saudi_areas",
    estate_filtering_options: "/items/Estate_filtering_options",
    property_stats: "/items/propertyStats",
  },
  HERO: {
    invest_page_hero: "/items/investPageHero",
    home_page_hero: "/items/homePageHero",
  },
  INVEST: {
    invest_strategy: "/items/investStrategy",
    invest_summary: "/items/investmentSummary",
    invest_options: "/items/investOption",
    invest_estates: "/items/invest_estates",
  },
  MARKET: {
    market_insights: "/items/propertyStats",
    market_analysis: "/items/marketAnalysis",
    market_reports: "/items/marketReports",
  },
  OWNER: {
    our_services: "/items/ourServices",
    start_your_journey: "/items/start_you_journey",
    contact_us_info: "/items/contactUsInfo",
    contact_us_form: "/items/conactUsForm",
  },
  FOOTER: {
    footer_up_data: "/items/footerUpData",
    footer_terms_and_policies: "/items/footerTermsAndPolicies",
  },
};

export function buildUrl(endpoint: string, params?: Record<string, any>) {
  const query = params
    ? "?" + new URLSearchParams(params as Record<string, string>).toString()
    : "";
  return `${API_BASE_URL}${endpoint}${query}`;
}
