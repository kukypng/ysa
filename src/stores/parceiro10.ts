import { StoreConfig } from '../StoreConfig';

export const parceiro10Config: StoreConfig = {
  PHONE_NUMBER: '5511999999999',
  DELIVERY: {
    MIN_ORDER_FREE_DELIVERY: 220,
    FEE: 16,
  },
  STORE_NAME: 'Parceiro 10 Presentes',
  AFFILIATE_NAME: 'Gabriela Miranda',
  PRODUCTS: [
    {
      id: 1,
      name: "Caixa Surpresa",
      price: 199,
      image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=500&q=80",
      description: "Caixa presente personalizada"
    },
    {
      id: 2,
      name: "Kit Bem-estar",
      price: 159,
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500&q=80",
      description: "Kit relaxamento completo"
    },
    {
      id: 3,
      name: "Álbum Fotográfico",
      price: 129,
      image: "https://images.unsplash.com/photo-1518557984649-7b161c230cfa?w=500&q=80",
      description: "Álbum personalizado premium"
    },
    {
      id: 4,
      name: "Kit Chocolates",
      price: 89,
      image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=500&q=80",
      description: "Caixa de chocolates finos"
    }
  ]
};