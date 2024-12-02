import { Component, OnInit } from '@angular/core';

import { UserVouchersService } from '../../_services/user-vouchers.service';

@Component({
  selector: 'app-user-vouchers',
  templateUrl: './user-vouchers.component.html',
  styleUrl: './user-vouchers.component.scss'
})
export class UserVouchersComponent implements OnInit {

  loading: boolean = false;
  userVoucher: any [] = [];

  constructor(private userVouchersService: UserVouchersService) {}

  ngOnInit(): void {
    this.listUserVoucher();
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

}
