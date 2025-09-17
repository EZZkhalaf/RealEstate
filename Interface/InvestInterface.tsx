export interface InvestmentOptionInterface {
  title: string;
  desc: string;
  avgROI: string;
  minInvestment: string;
  riskLevel: string;
  highlights: string[];
  buttonText: string;
  icon: string;
}
export interface OppurtunitiesListingInterface {
  opportunities: InvestmentOptionInterface[];
}

export interface OpCardInterface {
  op: InvestmentOptionInterface;
}

export interface SummaryInterface {
  total: string;
  name: string;
}

export interface MessageFormInterface {
  formTitle?: string;
  properties?: string[];
  buttonText?: string;
  formPlaceholder: string[];
}

export interface ContactInfoInterface {
  type: string;
  value: string;
  icon: string;
}

export interface WebInfoInterface {
  title?: string;
  contactInfo?: ContactInfoInterface[];
}
