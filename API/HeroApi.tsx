export async function getStaticHomePageHero(invest: boolean = false) {
  try {
    const response = await fetch(
      invest
        ? `http://localhost:8055/items/investPageHero?fields=*`
        : `http://localhost:8055/items/homePageHero?fields=*`
    );
    const result = await response.json();
    return result.data; // usually an array of hero items
  } catch (error) {
    console.error("Error fetching hero content:", error);
    return [];
  }
}
