import { StoreConfig } from '../StoreConfig';

export const parceiro1Config: StoreConfig = {
  PHONE_NUMBER: '5511999999999',
  DELIVERY: {
    MIN_ORDER_FREE_DELIVERY: 150,
    FEE: 12,
  },
  STORE_NAME: 'Parceiro 1 Store',
  AFFILIATE_NAME: 'Gabriela Miranda',
  PRODUCTS: [
    {
      id: 1,
      name: "Tênis Esportivo Premium",
      price: 299,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
      description: "Tênis esportivo de alta performance"
    },
    {
      id: 2,
      name: "Mochila Executiva",
      price: 189,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80",
      description: "Mochila executiva com compartimento para laptop"
    },
    {
      id: 3,
      name: "Relógio Smart",
      price: 399,
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&q=80",
      description: "Smartwatch com monitor cardíaco"
    },
    {
      id: 4,
      name: "Fone Bluetooth",
      price: 159,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
      description: "Fone de ouvido sem fio com cancelamento de ruído"
    }
  ]
};