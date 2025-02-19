import { StoreConfig } from '../StoreConfig';

export const partner4Config: StoreConfig = {
  PHONE_NUMBER: '5511999999999',
  DELIVERY: {
    MIN_ORDER_FREE_DELIVERY: 120,
    FEE: 10,
  },
  STORE_NAME: 'Parceiro 4 Acessórios',
  AFFILIATE_NAME: 'Gabriela Miranda',
  PRODUCTS: [
    {
      id: 1,
      name: "Colar Prata 925",
      price: 89,
      image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=500&q=80",
      description: "Colar delicado em prata"
    },
    {
      id: 2,
      name: "Pulseira Ajustável",
      price: 59,
      image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500&q=80",
      description: "Pulseira artesanal premium"
    },
    {
      id: 3,
      name: "Brincos Elegantes",
      price: 79,
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&q=80",
      description: "Par de brincos delicados"
    },
    {
      id: 4,
      name: "Anel Regulável",
      price: 49,
      image: "https://images.unsplash.com/photo-1598560917807-1bae44bd2be8?w=500&q=80",
      description: "Anel ajustável banhado a ouro"
    }
  ]
};