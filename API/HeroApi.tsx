export async function getStaticHomePageHero() {
  try {
    const response = await fetch(
      `http://localhost:8055/items/homePageHero?fields=*`
    );
    const result = await response.json();
    return result.data; // usually an array of hero items
  } catch (error) {
    console.error("Error fetching hero content:", error);
    return [];
  }
}
