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

export async function getStaticOurServices() {
  try {
    const response = await fetch("http://localhost:8055/items/ourServices", {
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

export async function getStaticMarketReports() {
  try {
    const response = await fetch("http://localhost:8055/items/marketReports", {
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

export async function getStaticPropertyStats() {
  try {
    const response = await fetch("http://localhost:8055/items/propertyStats", {
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

export async function getStaticInvestmentSummary() {
  try {
    const response = await fetch(
      "http://localhost:8055/items/investmentSummary",
      {
        //   headers: {
        //     Authorization: `Bearer ${TOKEN}`,
        //   },
      }
    );
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}
