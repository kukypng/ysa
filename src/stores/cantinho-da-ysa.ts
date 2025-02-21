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
      image: "https://s10.aconvert.com/convert/p3r68-cdx67/a2s0d-omn9t.jpg",
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
