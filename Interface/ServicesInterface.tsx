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
