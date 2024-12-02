import { Component, OnInit } from '@angular/core';

import { MessageService } from 'primeng/api';
import { VouchersService } from '../../_services/vouchers.service';

import { ListVouchers } from '../../_models/vouchers.interface';

@Component({
  selector: 'app-list-vouchers',
  templateUrl: './list-vouchers.component.html',
  styleUrl: './list-vouchers.component.scss'
})
export class ListVouchersComponent implements OnInit {

  listVouchers: ListVouchers[] = [];
  loading: boolean = false;
  loadingSubmit: boolean = false;

  constructor( 
    private messageService: MessageService,
    private voucherService: VouchersService
  ){}

  ngOnInit(): void {
    this.listAllVouchers();
  }

  listAllVouchers() {
    this.loading = true;
    this.voucherService.getAllVouchers().subscribe({
      next: (res) => { 
        this.listVouchers = res;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    })
  }

  redeemVoucher(voucherId: string) {
    this.loadingSubmit = true;
    this.voucherService.postRedeemVouchers(voucherId).subscribe({
      next: (res) => { 
        console.log(res)

        this.messageService.add({
          severity: 'success',
          summary: 'Successo',
          detail: 'Cupom resgatado!',
        });

        this.loadingSubmit = false;

      },
      error: (err) => {

        this.messageService.add({
          severity: 'error',
          summary: 'Erro',
          detail: err.error.message,
        });

        this.loadingSubmit = false;
        console.error(err);
      }
    })
  }
}
