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

export interface CoffeeShopDetail extends CoffeeShop {
    environment: Environment; 
    voucherPromotional: VoucherPromotional[];
}

export interface Environment {
    id: string;
    description: string;
    openingHours: string; 
    coffeeTypes: string[]; 
    urlImages: string[];
    socialMedias: SocialMedias [];
}
export interface SocialMedias {
    id: string;
    name: string;
    url: string;
}

export interface VoucherPromotional {
    id: string;
    voucher: string; 
    redeemed: boolean; 
    availableQuantity: number; 
    validFrom: string; 
    validUntil: string;
    redeemedAt: string | null; 
    redemptionCode: string;
    coffeeShopId: string; 
    userId: string | null; 
}
