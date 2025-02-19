import { StoreConfig } from '../StoreConfig';

export const partner8Config: StoreConfig = {
  PHONE_NUMBER: '5511999999999',
  DELIVERY: {
    MIN_ORDER_FREE_DELIVERY: 170,
    FEE: 14,
  },
  STORE_NAME: 'Parceiro 8 Papelaria',
  AFFILIATE_NAME: 'Gabriela Miranda',
  PRODUCTS: [
    {
      id: 1,
      name: "Planner 2024",
      price: 89,
      image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=500&q=80",
      description: "Planner anual personalizado"
    },
    {
      id: 2,
      name: "Kit Canetas",
      price: 59,
      image: "https://images.unsplash.com/photo-1581431886281-93ae50c9b47d?w=500&q=80",
      description: "Kit canetas coloridas"
    },
    {
      id: 3,
      name: "Caderno Artesanal",
      price: 79,
      image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=500&q=80",
      description: "Caderno capa dura artesanal"
    },
    {
      id: 4,
      name: "Kit Washi Tapes",
      price: 49,
      image: "https://images.unsplash.com/photo-1518655061710-5ccf392c275a?w=500&q=80",
      description: "Kit com 10 washi tapes"
    }
  ]
};