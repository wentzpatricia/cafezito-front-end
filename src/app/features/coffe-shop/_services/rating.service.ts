import { Injectable } from "@angular/core";
import { RequestsService } from "../../../core/services/requests.service";
import { BodyRating } from "../_models/rating.interface";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class RatingService {
    
    constructor(private requestsService: RequestsService) {}

    postCoffeeShopRating(body: BodyRating, coffeeShopId: string): Observable<any>{
        const url = `coffee-shop/${coffeeShopId}/rating`;
        return this.requestsService.executePost({ url , body});
    }
}