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
      image: "https://s11.aconvert.com/convert/p3r68-cdx67/c50er-9az3l.jpgw=500&q=80",
      description: "Delicioso bolo de Brigadeiro com sabor irresistível"
    },
    {
      id: 2,
      name: "Bolo de Prestígio",
      price: 14,
      image: "https://s11.aconvert.com/convert/p3r68-cdx67/cbmsb-7ghgt.jpgw=500&q=80",
      description: "Bolo cremoso com pedaços de coco fresco"
    },
    {
      id: 3,
      name: "Bolo de Ninho com Nutella",
      price: 14,
      image: "https://s11.aconvert.com/convert/p3r68-cdx67/aozyo-8bdwx.jpgw=500&q=80",
      description: "Bolo de leite Ninho com Nutella"
    },
  ]
};
