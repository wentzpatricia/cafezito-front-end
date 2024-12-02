import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { RequestsService } from '../../../core/services/requests.service';
import { ListVouchers } from '../_models/vouchers.interface';


@Injectable({ providedIn: 'root' })
export class VouchersService {
    
    constructor(private requestsService: RequestsService) {}
    
    getAllVouchers(): Observable<ListVouchers[]> {
        const url = `coffee-shop/coffeeShopId/vouchers`;
        return this.requestsService.executeGet({ url });
    }
    
}