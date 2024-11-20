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
    product: ProductTagEnum[]; 
    rating: Rating[];
}
  
export enum ProductTagEnum {
    VEGANO = "vegano",
    VEGETARIANO = "vegetariano",
    PETFRIENDLY = "petfriendly",
    COWORKING = "coworking",
    WIFI = "wifi",
    SEM_GLUTEN = "sem-gluten",
    MENOR_PRECO = "menor-preco",
    MAIOR_PRECO = "maior-preco",
}