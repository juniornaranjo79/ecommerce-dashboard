export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
}

export type Category = "All" | "Electrónica" | "Ropa" | "Hogar";
