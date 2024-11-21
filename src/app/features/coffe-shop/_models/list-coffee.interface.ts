import { ProductTagEnum } from "./coffee-shop.enum";
import { Rating } from "./rating.interface";

export interface CoffeeShop {
    id: string;
    name: string;
    address: string;
    urlImage: string;
    averageRating: number;
    product: ProductTagEnum[]; 
    rating: Rating[];
}
  
export interface CoffeeShopDetail extends CoffeeShop {
    environment: Environment; 
    voucherPromotional: VoucherPromotional[];
}

export interface Environment {
    id: string;
    description: string;
    openingHours: string; 
    coffeTypes: string[]; 
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
