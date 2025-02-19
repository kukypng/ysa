import { StoreConfig } from '../StoreConfig';

export const partner2Config: StoreConfig = {
  PHONE_NUMBER: '5511999999999',
  DELIVERY: {
    MIN_ORDER_FREE_DELIVERY: 200,
    FEE: 15,
  },
  STORE_NAME: 'Parceiro 2 Cosméticos',
  AFFILIATE_NAME: 'Gabriela Miranda',
  PRODUCTS: [
    {
      id: 1,
      name: "Kit Skincare Premium",
      price: 249,
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&q=80",
      description: "Kit completo para cuidados com a pele"
    },
    {
      id: 2,
      name: "Perfume Luxo",
      price: 189,
      image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=500&q=80",
      description: "Fragrância exclusiva importada"
    },
    {
      id: 3,
      name: "Máscara Facial",
      price: 79,
      image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=500&q=80",
      description: "Máscara facial hidratante"
    },
    {
      id: 4,
      name: "Sérum Anti-idade",
      price: 159,
      image: "https://images.unsplash.com/photo-1617897903246-719242758050?w=500&q=80",
      description: "Sérum concentrado anti-envelhecimento"
    }
  ]
};