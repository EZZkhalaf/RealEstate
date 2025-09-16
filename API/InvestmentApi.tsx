export default async function getStaticInvestmentStrategies() {
  try {
    const response = await fetch("http://localhost:8055/items/investStrategy", {
      //   headers: {
      //     Authorization: `Bearer ${TOKEN}`,
      //   },
    });
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function getStaticMarketAnalysis() {
  try {
    const response = await fetch("http://localhost:8055/items/marketAnalysis", {
      //   headers: {
      //     Authorization: `Bearer ${TOKEN}`,
      //   },
    });
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}
