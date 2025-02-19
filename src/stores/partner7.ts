import { StoreConfig } from '../StoreConfig';

export const partner7Config: StoreConfig = {
  PHONE_NUMBER: '5511999999999',
  DELIVERY: {
    MIN_ORDER_FREE_DELIVERY: 140,
    FEE: 11,
  },
  STORE_NAME: 'Parceiro 7 Fitness',
  AFFILIATE_NAME: 'Gabriela Miranda',
  PRODUCTS: [
    {
      id: 1,
      name: "Kit Yoga",
      price: 159,
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&q=80",
      description: "Kit completo para yoga"
    },
    {
      id: 2,
      name: "Garrafa Térmica",
      price: 89,
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&q=80",
      description: "Garrafa térmica fitness"
    },
    {
      id: 3,
      name: "Conjunto Fitness",
      price: 199,
      image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=500&q=80",
      description: "Conjunto esportivo feminino"
    },
    {
      id: 4,
      name: "Faixa Elástica",
      price: 49,
      image: "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=500&q=80",
      description: "Kit faixas elásticas exercício"
    }
  ]
};