import { StoreConfig } from '../StoreConfig';

export const partner3Config: StoreConfig = {
  PHONE_NUMBER: '5511999999999',
  DELIVERY: {
    MIN_ORDER_FREE_DELIVERY: 180,
    FEE: 14,
  },
  STORE_NAME: 'Parceiro 3 Eletrônicos',
  AFFILIATE_NAME: 'Gabriela Miranda',
  PRODUCTS: [
    {
      id: 1,
      name: "Carregador Wireless",
      price: 129,
      image: "https://images.unsplash.com/photo-1586816879360-004f5b0c51e3?w=500&q=80",
      description: "Carregador sem fio rápido"
    },
    {
      id: 2,
      name: "Caixa de Som Bluetooth",
      price: 199,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80",
      description: "Caixa de som portátil à prova d'água"
    },
    {
      id: 3,
      name: "Power Bank",
      price: 89,
      image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&q=80",
      description: "Bateria portátil 10000mAh"
    },
    {
      id: 4,
      name: "Suporte para Celular",
      price: 59,
      image: "https://images.unsplash.com/photo-1586107874342-c32f47386729?w=500&q=80",
      description: "Suporte ajustável para smartphone"
    }
  ]
};