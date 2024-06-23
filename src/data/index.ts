export enum ProductCategory {
  Shirts = "shirts",
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
    name: "Cafe del monte organico",
    slug: "cafe-del-monte-organico",
    price: 15000,
    description:
      "Este es el cafe producido en donde doña Berliza, el mejor cafe fe la Argentina huila.",
    cover: "https://i.ibb.co/TtrhsLS/Whats-App-Image-2024-06-23-at-03-34-25-1.jpg",
    coverCredits:
      "https://cafelab.pe/wp-content/uploads/2024/05/Namuk-coffee-cafe-arabe-1024x684.jpg",
    category: ProductCategory.Shirts,
  },
  {
    id: 18,
    name: "Haryo Setyadi",
    slug: "haryo-setyadi-shirt",
    price: 199,
    description:
      "Feel the Comfort and Peace of the Haryo Setyadi Shirt white as snow. Don't worry about the stain, it's easy to clean.",
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
      "Elevate Your Style and Comfort with the Faith Yarn Shoes. Designed to stay cool and dry all day.",
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
      "Stay Cool and Dry with the T-Shirt 705 from Ryan Hoffman Collection. Relax, run, dream.",
    cover: "/products/ryan-hoffman-6Nub980bI3I-unsplash.webp",
    coverCredits:
      "https://unsplash.com/photos/6Nub980bI3I?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink",
    category: ProductCategory.Shirts,
  },
];
