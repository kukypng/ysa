import { StoreConfig } from '../StoreConfig';

export const partner5Config: StoreConfig = {
  PHONE_NUMBER: '5511999999999',
  DELIVERY: {
    MIN_ORDER_FREE_DELIVERY: 250,
    FEE: 18,
  },
  STORE_NAME: 'Parceiro 5 Moda',
  AFFILIATE_NAME: 'Gabriela Miranda',
  PRODUCTS: [
    {
      id: 1,
      name: "Vestido Elegante",
      price: 299,
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&q=80",
      description: "Vestido longo para ocasiões especiais"
    },
    {
      id: 2,
      name: "Blazer Moderno",
      price: 259,
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&q=80",
      description: "Blazer feminino contemporâneo"
    },
    {
      id: 3,
      name: "Calça Social",
      price: 189,
      image: "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=500&q=80",
      description: "Calça social de alfaiataria"
    },
    {
      id: 4,
      name: "Conjunto Casual",
      price: 229,
      image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=500&q=80",
      description: "Conjunto casual moderno"
    }
  ]
};