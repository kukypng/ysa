import { StoreConfig } from '../StoreConfig';

export const partner6Config: StoreConfig = {
  PHONE_NUMBER: '5511999999999',
  DELIVERY: {
    MIN_ORDER_FREE_DELIVERY: 160,
    FEE: 13,
  },
  STORE_NAME: 'Parceiro 6 Casa & Decoração',
  AFFILIATE_NAME: 'Gabriela Miranda',
  PRODUCTS: [
    {
      id: 1,
      name: "Luminária Design",
      price: 189,
      image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&q=80",
      description: "Luminária moderna para sala"
    },
    {
      id: 2,
      name: "Vaso Decorativo",
      price: 129,
      image: "https://images.unsplash.com/photo-1582897085656-c636d006a246?w=500&q=80",
      description: "Vaso cerâmica artesanal"
    },
    {
      id: 3,
      name: "Almofadas Kit",
      price: 159,
      image: "https://images.unsplash.com/photo-1592789705501-f9ae4278a9c9?w=500&q=80",
      description: "Kit com 3 almofadas decorativas"
    },
    {
      id: 4,
      name: "Espelho Decorativo",
      price: 239,
      image: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=500&q=80",
      description: "Espelho com moldura dourada"
    }
  ]
};