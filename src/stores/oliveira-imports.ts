import { StoreConfig } from '../StoreConfig';

export const oliveiraImportsConfig: StoreConfig = {
  PHONE_NUMBER: '5564999421093', // Replace with actual phone number
  DELIVERY: {
    MIN_ORDER_FREE_DELIVERY: 200,
    FEE: 15,
  },
  STORE_NAME: 'Oliveira Imports',
  AFFILIATE_NAME: 'Gabriela Miranda',
  PRODUCTS: [
    {
      id: 1,
      name: "Perfume Importado Paris",
      price: 180,
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&q=80",
      description: "Fragrância exclusiva com notas florais"
    },
    {
      id: 2,
      name: "Relógio Luxury Gold",
      price: 450,
      image: "https://images.unsplash.com/photo-1587836374828-4dbafa94cf0e?w=500&q=80",
      description: "Relógio elegante banhado a ouro"
    },
    {
      id: 3,
      name: "Bolsa Designer Premium",
      price: 290,
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&q=80",
      description: "Bolsa de couro genuíno importada"
    },
    {
      id: 4,
      name: "Óculos de Sol Elite",
      price: 180,
      image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&q=80",
      description: "Óculos de sol com proteção UV premium"
    }
  ]
};
