import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { RequestsService } from '../../../core/services/requests.service';
import { CoffeeShop } from '../_models/list-coffee.interface';

@Injectable({ providedIn: 'root' })
export class ListCoffeeShopService {
    
    constructor(private requestsService: RequestsService) {}
    
    getAllCoffeeShop(): Observable<CoffeeShop[]>{
        const url = `coffee-shop`;
        return this.requestsService.executeGet({ url });
    }
}