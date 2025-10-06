import { client } from "./GraphQueries/graphql";
import { gql } from "graphql-request";

import {
  getStaticInvestmentStrategiesQuery,
  getStaticMarketAnalysisQuery,
  getStaticMarketReportsQuery,
  getStaticPropertyStatsQuery,
  getStaticStartYourJournyQuery,
} from "./GraphQueries/queries";
export const revalidate = 60;
// export default async function getStaticInvestmentStrategies() {
//   try {
//     const response = await fetch(
//       // "http://localhost:8055/items/investStrategy"
//       buildUrl(ENDPOINTS.INVEST.invest_strategy),

//       {
//         //   headers: {
//         //     Authorization: `Bearer ${TOKEN}`,
//         //   },
//         cache: "force-cache",
//       }
//     );
//     const result = await response.json();
//     return result.data;
//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// }

export default async function getStaticInvestmentStrategies() {
  try {
    const response: any = await client.request(
      getStaticInvestmentStrategiesQuery
    );
    return response.investStrategy;
  } catch (error) {
    console.log(error);
    return error;
  }
}

// export async function getStaticMarketAnalysis() {
//   try {
//     const response = await fetch(
//       // "http://localhost:8055/items/marketAnalysis"
//       buildUrl(ENDPOINTS.MARKET.market_analysis)
//     );
//     const result = await response.json();
//     return result.data;
//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// }

export async function getStaticMarketAnalysis() {
  try {
    const response: any = await client.request(getStaticMarketAnalysisQuery);
    return response.marketAnalysis;
  } catch (error) {
    console.log(error);
    return error;
  }
}

// export async function getStaticOurServices() {
//   try {
//     const response = await fetch(
//       // "http://localhost:8055/items/ourServices?fields=,our_service_feature.*"
//       buildUrl(ENDPOINTS.OWNER.our_services, {
//         fields: "*,our_service_features.*",
//       })
//     );
//     const result = await response.json();
//     return result.data;
//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// }

// export async function getStaticOurServices() {
//   try {
//     const response: any = await client.request(getStaticOurServicesQuery);
//     return response.ourServices;
//   } catch (error) {
//     console.log(error);
//     return error
//   }
// }

export async function getStaticOurServices() {
  try {
    const response: any = await client.request(gql`
      query {
        ourServices {
          id
          icon
          title
          description
          cta
          our_service_features {
            feature
          }
        }
      }
    `);
    return response.ourServices;
  } catch (error) {
    console.log(error);
    return error;
  }
}

// export async function getStaticMarketReports() {
//   try {
//     const response = await fetch(
//       // "http://localhost:8055/items/marketReports"
//       buildUrl(ENDPOINTS.MARKET.market_reports),
//       {
//         //   headers: {
//         //     Authorization: `Bearer ${TOKEN}`,
//         //   },
//         // cache: "force-cache",
//       }
//     );
//     const result = await response.json();
//     return result.data;
//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// }

export async function getStaticMarketReports() {
  try {
    const response: any = await client.request(getStaticMarketReportsQuery);
    return response.marketReports;
  } catch (error) {
    console.log(error);
    return error;
  }
}

// export async function getStaticPropertyStats() {
//   try {
//     const response = await fetch(
//       // "http://localhost:8055/items/propertyStats"
//       buildUrl(ENDPOINTS.ESTATES.property_stats)
//     );
//     const result = await response.json();
//     return result.data;
//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// }

export async function getStaticPropertyStats() {
  try {
    const response: any = await client.request(getStaticPropertyStatsQuery);
    return response.propertyStats;
  } catch (error) {
    console.log(error);
    return error;
  }
}

// export async function getStaticInvestmentSummary() {
//   try {
//     const response = await fetch(
//       // "http://localhost:8055/items/investmentSummary"
//       buildUrl(ENDPOINTS.INVEST.invest_summary)
//     );
//     const result = await response.json();
//     return result.data;
//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// }

// export async function getStaticStartYourJourny() {
//   try {
//     const response = await fetch(
//       // "http://localhost:8055/items/start_you_journey?fields=*,website_advantages.item.*"
//       buildUrl(ENDPOINTS.OWNER.start_your_journey, {
//         fields: "*,website_advantages.item.*",
//       })
//     );
//     const result = await response.json();

//     return result.data;
//   } catch (error) {
//     console.log(error);
//     return error;
//   }
// }

export async function getStaticStartYourJourny() {
  try {
    const response: any = await client.request(getStaticStartYourJournyQuery);

    return response.start_you_journey;
  } catch (error) {
    console.log(error);
    return error;
  }
}
