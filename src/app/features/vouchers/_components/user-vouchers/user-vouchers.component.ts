import { Component, OnDestroy, OnInit } from '@angular/core';

import { UserVouchersService } from '../../_services/user-vouchers.service';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

import { QrCodeComponent } from '../qr-code/qr-code.component';
import { SharedEventService } from '../../_services/shared.event.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-vouchers',
  templateUrl: './user-vouchers.component.html',
  styleUrl: './user-vouchers.component.scss'
})
export class UserVouchersComponent implements OnInit, OnDestroy {

  private subscription: Subscription = new Subscription();

  loading: boolean = false;
  ref: DynamicDialogRef | undefined;
  userVoucher: any [] = [];

  constructor (
    public dialogService: DialogService,
    private sharedEventService: SharedEventService,
    private userVouchersService: UserVouchersService
  ) {}
  
  ngOnInit(): void {
    this.listUserVoucher();

    this.subscription.add(
      this.sharedEventService.voucherRedeemed$.subscribe(() => {
        this.listUserVoucher();
      })
    );
  }

  ngOnDestroy() {
    if (this.ref) {
        this.ref.close();
    }
  }

  listUserVoucher() {
    this.loading = true;
    this.userVouchersService.getUserVouchers().subscribe({
      next: (res) => {
        this.userVoucher = res;
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        console.error(err)
      }
    })
  }

  show(data: any) {
    this.ref = this.dialogService.open(QrCodeComponent, { 
        data: data,
        header: 'QRCode para validar desconto'
    });
  }

}
