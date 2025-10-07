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

export const getStaticEstatesFilteredQuery = gql`
  query getEstatesFilteres(
    $filter: estateCard_filter
    $limit: Int
    $offset: Int
    $sort: [String]
  ) {
    estateCard(filter: $filter, limit: $limit, offset: $offset, sort: $sort) {
      id
      title
      home_type
      price
      beds
      baths
      area
      sale_type
      special_properties
      estate_features
      longitude
      latitude

      images {
        directus_files_id {
          id
        }
      }

      estate_city {
        name
        area {
          name
        }
      }
    }
    estateCard_aggregated(filter: $filter) {
      count {
        id
      }
    }
  }
`;

//   fields:
//     "id,title,estate_city.*,estate_city.area.*,home_type,price,estate_features,beds,baths,area,images.*",
//   limit: 3,
//   [`filter[estate_city][name][_eq]`]: city,
//   [`filter[id][_neq]`]: estate_id,

export const getSimilarEstatesQuery = gql`
  query getSimilarEstates($filter: estateCard_filter, $limit: Int) {
    estateCard(filter: $filter, limit: $limit) {
      id
      title
      estate_city {
        name
        area {
          name
        }
      }
      home_type
      price
      estate_features
      beds
      baths
      area
      images {
        directus_files_id {
          id
        }
      }
    }
  }
`;
