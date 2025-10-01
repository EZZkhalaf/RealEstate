import { gql } from "graphql-request";
export const getStaticMarketReportsQuery = gql`
  query {
    marketReports {
      id
      title
      description
      type
      growth
      date
      linkText
    }
  }
`;

export const getStaticInvestmentStrategiesQuery = gql`
  query {
    investStrategy {
      id
      title
      description
      timeframe
      riskLevel
      pros
      cons
      bestFor
      link
      icon
      avgROI
      minInvestment
      text
    }
  }
`;

export const getStaticMarketAnalysisQuery = gql`
  query {
    marketAnalysis {
      id
      name
      description
      appreciation
      rentalYield
      avgPrice
    }
  }
`;

export const getStaticOurServicesQuery = gql`
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
`;

export const getStaticPropertyStatsQuery = gql`
  query {
    propertyStats {
      id
      metric
      value
      change
    }
  }
`;

export const getStaticStartYourJournyQuery = gql`
  query {
    start_you_journey {
      id
      title
      paragraph
      button_1_placeholder
      button_2_placeholder
      website_advantages {
        collection
        item {
          ... on website_advantages {
            icon
            advantageSmalltitle
            advantageSmallParagraph
          }
        }
      }
    }
  }
`;
