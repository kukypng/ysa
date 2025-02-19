import { StoreConfig } from '../StoreConfig';

export const partner9Config: StoreConfig = {
  PHONE_NUMBER: '5511999999999',
  DELIVERY: {
    MIN_ORDER_FREE_DELIVERY: 190,
    FEE: 15,
  },
  STORE_NAME: 'Parceiro 9 Pet Shop',
  AFFILIATE_NAME: 'Gabriela Miranda',
  PRODUCTS: [
    {
      id: 1,
      name: "Cama Pet Luxo",
      price: 159,
      image: "https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?w=500&q=80",
      description: "Cama confortável para pets"
    },
    {
      id: 2,
      name: "Kit Higiene Pet",
      price: 89,
      image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=500&q=80",
      description: "Kit completo higiene animal"
    },
    {
      id: 3,
      name: "Brinquedos Pet",
      price: 69,
      image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=500&q=80",
      description: "Kit brinquedos para pets"
    },
    {
      id: 4,
      name: "Roupinha Pet",
      price: 49,
      image: "https://images.unsplash.com/photo-1583511666407-5f06533f2113?w=500&q=80",
      description: "Roupa estilosa para pets"
    }
  ]
};