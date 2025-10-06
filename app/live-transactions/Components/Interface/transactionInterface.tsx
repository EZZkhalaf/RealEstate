export interface TransactionInterface {
  id: number;
  type: string;
  propertyType: string;
  title: string;
  location: string;
  price: number;
  priceChange: string;
  date: string;
  buyer: string;
  seller: string;
  status: string;
  sqft: number;
  beds: number;
  featured: boolean;
  installmentPayment: boolean;
}

//   {
//     "id": 11,
//     "type": "sale",
//     "propertyType": "Land",
//     "title": "Residential Plot in King Abdullah Economic City",
//     "location": "KAEC",
//     "price": 1400000,
//     "priceChange": "+3.2%",
//     "date": "2025-10-06T06:30:00.000Z",
//     "buyer": "Investor Group",
//     "seller": "Master Developer",
//     "status": "cancelled",
//     "sqft": 9000,
//     "beds": 0,
//     "featured": false,
//     "installmentPayment": true
//   },
