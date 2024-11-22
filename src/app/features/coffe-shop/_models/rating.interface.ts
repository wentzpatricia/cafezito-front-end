export interface Rating {
    id: string;
    stars: number;
    feedback: string;
    date: string;
    userId: string;
    coffeeShopId: string;
}


export interface BodyRating {
    stars: number;
    feedback: string;
}