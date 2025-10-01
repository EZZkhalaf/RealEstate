export interface ServiceInterface {
  icon: string;
  title: string;
  description: string;
  cta?: string;
  our_service_features: any;
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

export interface InputGrayInterface {
  type?: string;
  placeholder?: string;
  icon?: string;
  additionalCss?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  header?: string;
  additionalInputCss?: string;
  value?: any;
}

export interface InsightWithIconAtomInterface {
  name: string;
  icon: string;
  value: any;
}

export interface ListSelectInterface {
  title?: string;
  list?: string[] | number[];
  width?: string;
  height?: string;
  value?: string | number;
  onChange?: (value: string | number) => void;
  years?: boolean;
}

export interface PriceSelectedInterface {
  title: string;
  onChange?: any;
  list: any[];
  value?: any;
  HOA?: boolean;
}

export interface SingleCheckBoxInterface {
  text: string;
  value?: any;
  noPadding?: boolean;
  checked?: boolean;
  onChange?: (checked: any) => void;
}

export interface SixButtonsInputsInterface {
  title: string;
  options: any;
  selected: any;
  setSelected: any;
}

export interface TriggerButtonsInterface {
  text: string;
  icon: string;
  onClick: any;
}

export interface ViewButtonAtomInterface {
  title: string;
  color?: string;
  hoverColor?: string;
  textColor?: string;
  hoverTextColor?: string;
  onClick?: any;
  padding?: string;
  border?: string;
}
