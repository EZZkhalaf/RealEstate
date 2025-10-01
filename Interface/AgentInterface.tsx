export interface ListingByAgentInterface {
  id: number;
  name: string;
  contact: string | null;
}

export interface FilterButtonInterface {
  text: string;
}

export interface AgentInterface {
  id: number;
  name: string;
  rating: number;
  locations: string[];
  image: string;
  sales: string;
  experience: string;
  agentImage?: string;
  agent_city?: any;
  agent_specialties?: any;
}

export interface LocationInterface {
  id?: number;
  name: string;
  cities?: string[];
}

export interface AgentCardInterface {
  agent: any;
}

export interface ImageAndNameProfileProps {
  image?: string;
  name?: string;
  locations?: any;
}
