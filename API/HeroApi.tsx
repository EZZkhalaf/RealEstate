import { buildUrl, ENDPOINTS } from "./api.config";

export async function getStaticHomePageHero(invest: boolean = false) {
  try {
    const response = await fetch(
      invest
        ? buildUrl(ENDPOINTS.HERO.invest_page_hero, { fields: "*" })
        : buildUrl(ENDPOINTS.HERO.home_page_hero, { fields: "*" }),

      {
        next: { revalidate: 60 },
        cache: "force-cache",
      }
    );
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error("Error fetching hero content:", error);
    return [];
  }
}
