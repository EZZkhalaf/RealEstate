import { Dispatch, SetStateAction } from "react";
import { ListingByAgentInterface } from "./AgentInterface";
import { FiltersInterface } from "./ServicesInterface";

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
  price: number;
  title: string;
  location: string;
  beds: number;
  baths: number;
  area: string;
  estate_features: any;
  special_properties: any;
  actions: string[];
  stats: StatsInterface;
  listing_info: ListingInfoInterface;
  type: string;
  special_paragraph: string;
  market_status: string;
  images?: any;
  days_on_market?: number;
  saves?: number;
  views?: number;
  longitude: string;
  latitude: string;
  estate_city: any;
  sale_type: any;
  home_type: any;
}

// Block inside features
interface FeatureBlock {
  id: string;
  type: string; // e.g., "paragraph"
  data: {
    text: string;
  };
}

// Features object
interface Features {
  time: number;
  blocks: FeatureBlock[];
  version: string;
}

// Location item
interface LocationItem {
  id: number;
  name: string;
  district: string;
  city: string;
}

// Location relation wrapper
interface LocationRelation {
  item: LocationItem;
}

// Financials item
interface FinancialItem {
  id: number;
  annual_rent: string;
  occupancy: string;
  total_units: string;
  risk_level: string;
}

// Financials relation wrapper
interface FinancialRelation {
  item: FinancialItem;
}

// Main Invest Estate interface
export interface InvestEstateInterface {
  id: number;
  title: string;
  type: string;
  grade: string;
  price: number;
  roi: string;
  features: Features;
  location: any;
  financials: FinancialRelation[];
  images: any;
  fund_percentage: number;
  fund_amount: number;
  return_in_5_years: number;
  yearly_investment: number;
  net_yield: number;
  estate_city?: any;
}

export interface ContactAgentButtonsInterface {
  onlyContact?: boolean;
}

export interface EstatePopUpInfoInterface {
  estate_id: any;
  onClose: any;
  // estates?: EstateInterface[];
  setSelectedEstate?: Dispatch<SetStateAction<any>>;
}

export interface SingleEstateEelementInterface {
  estate: EstateInterface;
  viewDetailsClick?: any;
  onClick?: any;
}

export interface StatusInterface {
  isActive: boolean;
  activeText?: string;
  offlineText?: string;
}

export interface SubmitButtonInterface {
  text?: string;
  type?: any;
  submitButtonCss?: string;
  onClick?: any;
  noPadding?: boolean;
}

export interface SearchFilterEstatesInterface {
  // mapSearch?: string;
  setMapSearch: Dispatch<SetStateAction<string>>;
  filters: FiltersInterface;
  setFilters: React.Dispatch<React.SetStateAction<FiltersInterface>>;
}
