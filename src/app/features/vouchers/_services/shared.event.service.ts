import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedEventService {
  private voucherRedeemedSource = new Subject<void>();

  voucherRedeemed$ = this.voucherRedeemedSource.asObservable();

  emitVoucherRedeemed() {
    this.voucherRedeemedSource.next();
  }
}
