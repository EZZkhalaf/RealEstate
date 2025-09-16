import { ListingByAgentInterface } from "./AgentInterface";

export interface GeneresInterface {
  generes: string[];
  filterOptions: string[];
}

interface ListingInfoInterface {
  last_checked: string;
  listing_updated: string;
  listing_by: ListingByAgentInterface[];
}

interface StatsInterface {
  days_on_market: number;
  views: number;
  saves: number;
}

export interface EstateInterface {
  id: number;
  price: string;
  title: string;
  location: string;
  beds: number;
  baths: number;
  area: string;
  image: string[];
  features: string[];
  special_props: string[];
  actions: string[];
  stats: StatsInterface;
  listing_info: ListingInfoInterface;
  type: string;
  special_paragraph: string;
  market_status: string;
}
