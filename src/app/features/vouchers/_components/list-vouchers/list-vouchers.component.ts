import { Component, OnInit } from '@angular/core';

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

  constructor(private voucherService: VouchersService){}

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
}
