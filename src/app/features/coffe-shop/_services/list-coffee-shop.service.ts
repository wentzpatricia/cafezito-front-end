import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { RequestsService } from '../../../core/services/requests.service';
import { CoffeeShop, CoffeeShopDetail } from '../_models/list-coffee.interface';
import { ProductTagEnum } from '../_models/coffee-shop.enum';

@Injectable({ providedIn: 'root' })
export class ListCoffeeShopService {
    
    constructor(private requestsService: RequestsService) {}
    
    getAllCoffeeShop(tags?: ProductTagEnum[]): Observable<CoffeeShop[]> {
        console.log(tags)
        const tagsParam = tags && tags.length > 0 ? tags.map(tag => `tags=${tag}`).join('&') : '';
        const url = tagsParam ? `coffee-shop?${tagsParam}` : `coffee-shop`;
    
        return this.requestsService.executeGet({ url });
    }

    getCoffeeShopById(id:string): Observable<CoffeeShopDetail>{
        const url = `coffee-shop/${id}`;
        return this.requestsService.executeGet({ url });
    }
}