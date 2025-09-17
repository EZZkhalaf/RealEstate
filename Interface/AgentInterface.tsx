export interface ListingByAgentInterface {
  id: number;
  name: string;
  contact: string | null;
}

export interface FilterButtonInterface {
  text: string;
}

export interface Agent {
  id: number;
  name: string;
  rating: number;
  locations: string[];
  image: string;
  sales: string;
  experience: string;
  specialties: string[];
}
