export async function getStaticInvestmentOption() {
  try {
    const response = await fetch("http://localhost:8055/items/investOption", {
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
