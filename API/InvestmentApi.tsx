import { buildUrl, ENDPOINTS } from "./api.config";

export default async function getStaticInvestmentStrategies() {
  try {
    const response = await fetch(
      // "http://localhost:8055/items/investStrategy"
      buildUrl(ENDPOINTS.INVEST.invest_strategy),

      {
        //   headers: {
        //     Authorization: `Bearer ${TOKEN}`,
        //   },
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

export async function getStaticMarketAnalysis() {
  try {
    const response = await fetch(
      // "http://localhost:8055/items/marketAnalysis"
      buildUrl(ENDPOINTS.MARKET.market_analysis),

      {
        //   headers: {
        //     Authorization: `Bearer ${TOKEN}`,
        //   },
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

export async function getStaticOurServices() {
  try {
    const response = await fetch(
      // "http://localhost:8055/items/ourServices"
      buildUrl(ENDPOINTS.OWNER.our_services),

      {
        //   headers: {
        //     Authorization: `Bearer ${TOKEN}`,
        //   },
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

export async function getStaticMarketReports() {
  try {
    const response = await fetch(
      // "http://localhost:8055/items/marketReports"
      buildUrl(ENDPOINTS.MARKET.market_reports),
      {
        //   headers: {
        //     Authorization: `Bearer ${TOKEN}`,
        //   },
        // cache: "force-cache",
      }
    );
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function getStaticPropertyStats() {
  try {
    const response = await fetch(
      // "http://localhost:8055/items/propertyStats"
      buildUrl(ENDPOINTS.ESTATES.property_stats),

      {
        //   headers: {
        //     Authorization: `Bearer ${TOKEN}`,
        //   },
        // cache: "force-cache",
      }
    );
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
      // "http://localhost:8055/items/investmentSummary"
      buildUrl(ENDPOINTS.INVEST.invest_summary),
      {
        //   headers: {
        //     Authorization: `Bearer ${TOKEN}`,
        //   },
        // cache: "force-cache",
      }
    );
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export async function getStaticStartYourJourny() {
  try {
    const response = await fetch(
      // "http://localhost:8055/items/start_you_journey?fields=*,website_advantages.item.*"
      buildUrl(ENDPOINTS.OWNER.start_your_journey, {
        fields: "*,website_advantages.item.*",
      }),
      {
        //   headers: {
        //     Authorization: `Bearer ${TOKEN}`,
        //   },
        // cache: "force-cache",
      }
    );
    const result = await response.json();

    return result.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}
