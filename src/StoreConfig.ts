// Store configuration types
export interface StoreConfig {
  PHONE_NUMBER: string;
  DELIVERY: {
    MIN_ORDER_FREE_DELIVERY: number;
    FEE: number;
  };
  STORE_NAME: string;
  AFFILIATE_NAME: string;
  PRODUCTS: Product[];
}

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}