export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  category: 'antipasti' | 'primi' | 'secondi' | 'dolci';
  image: string;
  isSignature?: boolean;
}

export interface WineItem {
  id: string;
  name: string;
  price: number;
  description: string;
  category: 'cuvee' | 'red' | 'white' | 'exclusive';
  image: string;
  archiveNo?: string;
  region?: string;
  limitation?: string;
}

export interface Reservation {
  id: string;
  partySize: string;
  date: string;
  time: string;
  ritual: string;
  fullName: string;
  specialRequests?: string;
  createdAt: string;
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
}
