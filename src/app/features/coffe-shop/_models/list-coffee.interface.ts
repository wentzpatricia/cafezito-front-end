export interface Rating {
    id: string;
    stars: number;
    feedback: string;
    date: string;
    userId: string;
    coffeeShopId: string;
}
  
export interface CoffeeShop {
    id: string;
    name: string;
    address: string;
    urlImage: string;
    averageRating: number;
    product: ProductTag[]; 
    rating: Rating[];
}
  

enum ProductTag {
    VEGANO,
    VEGETARIANO,
    PETFRIENDLY,
    COWORKING,
    WIFI,
    SEM_GLUTEN,
    MENOR_PRECO,
    MAIOR_PRECO,
}