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
      image: "https://cdn.glitch.global/544b719f-90a1-4944-85ea-5af63e29a557/IMG-20250128-WA0022.jpg?v=1740177584527",
      description: "Delicioso bolo de Brigadeiro com sabor irresistível"
    },
    {
      id: 2,
      name: "Bolo de Prestígio",
      price: 14,
      image: "https://cdn.glitch.global/544b719f-90a1-4944-85ea-5af63e29a557/IMG-20250214-WA0024.jpg?v=1740177618220",
      description: "Bolo cremoso com pedaços de coco fresco"
    },
    {
      id: 3,
      name: "Bolo de Ninho com Nutella",
      price: 14,
      image: "https://cdn.glitch.global/544b719f-90a1-4944-85ea-5af63e29a557/IMG-20250128-WA0019.jpg?v=1740177605290",
      description: "Bolo de leite Ninho com Nutella"
    },
    {
      id: 4,
      name: "egg de Páscoa",
      price: 14,
      image: "https://cdn.glitch.global/544b719f-90a1-4944-85ea-5af63e29a557/IMG-20250128-WA0019.jpg?v=1740177605290",
      description: "um egg de Páscoa"
    },
  ]
};
