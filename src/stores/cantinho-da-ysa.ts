import { StoreConfig } from '../StoreConfig';

export const cantinhoDaYsaConfig: StoreConfig = {
  PHONE_NUMBER: '5511999999999',
  DELIVERY: {
    MIN_ORDER_FREE_DELIVERY: 28,
    FEE: 9,
  },
  STORE_NAME: 'Cantinho Da Ysa',
  AFFILIATE_NAME: 'Gabriela Miranda',
  PRODUCTS: [
    {
      id: 1,
      name: "Bolo de Chocolate",
      price: 14,
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&q=80",
      description: "Delicioso bolo de chocolate com cobertura cremosa"
    },
    {
      id: 2,
      name: "Bolo de Morango",
      price: 14,
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&q=80",
      description: "Bolo cremoso com pedaços de morango fresco"
    },
    {
      id: 3,
      name: "Bolo de Ninho",
      price: 14,
      image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=500&q=80",
      description: "Bolo de leite Ninho com cobertura especial"
    },
    {
      id: 4,
      name: "Bolo de Oreo",
      price: 14,
      image: "https://images.unsplash.com/photo-1587668178277-295251f900ce?w=500&q=80",
      description: "Bolo cremoso com pedaços de Oreo"
    }
  ]
};