export enum ProductCategory {
  Shirts = "cafes",
  Pants = "pants",
  Shoes = "shoes",
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  description: string;
  cover: string;
  coverCredits: string;
  category: ProductCategory;
}

export const products: Product[] = [
  {
    id: 32,
    name: "Café del Monte Orgánico",
    slug: "cafe-del-monte-organico",
    price: 15000,
    description:
      "Este es el café producido en la finca de doña Berliza, el mejor café de la región de Huila, Argentina.",
    cover: "https://i.ibb.co/TtrhsLS/Whats-App-Image-2024-06-23-at-03-34-25-1.jpg",
    coverCredits:
      "https://cafelab.pe/wp-content/uploads/2024/05/Namuk-coffee-cafe-arabe-1024x684.jpg",
    category: ProductCategory.Shirts,
  },
  {
    id: 18,
    name: "Haryo Setyadi Shirt",
    slug: "haryo-setyadi-shirt",
    price: 199,
    description:
      "Siente la comodidad y la paz de la camiseta Haryo Setyadi blanca como la nieve. No te preocupes por las manchas, es fácil de limpiar.",
    cover: "/products/haryo-setyadi-acn5ERAeSb4-unsplash.webp",
    coverCredits:
      "https://unsplash.com/photos/acn5ERAeSb4?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink",
    category: ProductCategory.Shirts,
  },
  {
    id: 21,
    name: "Faith Yarn T-Shirt",
    slug: "faith-yarn-shirt",
    price: 59,
    description:
      "Eleva tu estilo y comodidad con los zapatos Faith Yarn. Diseñados para mantenerte fresco y seco todo el día.",
    cover: "/products/faith-yarn-Wr0TpKqf26s-unsplash.webp",
    coverCredits:
      "https://unsplash.com/photos/Wr0TpKqf26s?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink",
    category: ProductCategory.Shirts,
  },
  {
    id: 49,
    name: "T-Shirt 705",
    slug: "t-shirt-32",
    price: 99,
    description:
      "Mantente fresco y seco con la camiseta 705 de la colección de Ryan Hoffman. Relájate, corre, sueña.",
    cover: "/products/ryan-hoffman-6Nub980bI3I-unsplash.webp",
    coverCredits:
      "https://unsplash.com/photos/6Nub980bI3I?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink",
    category: ProductCategory.Shirts,
  },
];
