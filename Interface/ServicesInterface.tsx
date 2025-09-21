export interface ServiceInterface {
  icon: string;
  title: string;
  description: string;
  features: string[];
  cta?: string;
}

export interface ServicesInterface {
  services: ServiceInterface[];
}

export interface MenuData {
  title: string;
  items: any;
}

export interface UpperFooterInterface {
  menuData: MenuData[];
  locationAndIconsTitle?: string;
  icons: string[];
}

export interface FiltersInterface {
  saleType?: string; // "For Sale", "For Rent", etc.
  priceRange?: { min: number; max: number };
  bedsAndBaths?: { beds: number; baths: number };
  sort?: any;
  beds?: number;
  baths?: number;
  homeType?: string;
  moreFilters?: Record<string, any>;
  otherFilters?: {
    maxHOA?: number;
    listingType?: string[];
    propertyStatus: string;
    Tours?: string[];
    parkingSpots?: number;
    mustHaveGarage?: boolean;
    LotSize?: { min: number; max: number };
    hasBasement?: boolean;
    singleStoryOnly?: boolean;
    comms55?: string;
    view?: string[];
    certainLLocation?: string;
  };
}
