import { StoreConfig } from '../StoreConfig';

export const cantinhoDaYsaConfig: StoreConfig = {
  PHONE_NUMBER: '5564999421093',
  DELIVERY: {
    MIN_ORDER_FREE_DELIVERY: 28,
    FEE: 9,
  },
  STORE_NAME: 'Cantinho Da Ysa',
  AFFILIATE_NAME: 'ysa',
  PRODUCTS: [
    {
      id: 1,
      name: "Bolo de Brigadeiro",
      price: 14,
      image: "https://cdn.glitch.global/9c2fc3a0-cd59-4849-9b96-df10aed5f38d/images%2F3.png?v=1739612704939",
      description: "Delicioso bolo de Brigadeiro com sabor irresistível"
    },
    {
      id: 2,
      name: "Bolo de Prestígio",
      price: 14,
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&q=80",
      description: "Bolo cremoso com pedaços de coco fresco"
    },
    {
      id: 3,
      name: "Bolo de Ninho com Nutella",
      price: 14,
      image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=500&q=80",
      description: "Bolo de leite Ninho com Nutella"
    },
  ]
};
