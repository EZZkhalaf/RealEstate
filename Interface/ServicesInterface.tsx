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
