import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { RequestsService } from '../../../core/services/requests.service';


@Injectable({ providedIn: 'root' })
export class UserVouchersService {
    
    constructor(private requestsService: RequestsService) {}
    
    getUserVouchers(): Observable<any[]> {
        const url = `coffee-shop/coffeeShopId/vouchers/user`;
        return this.requestsService.executeGet({ url });
    }
}