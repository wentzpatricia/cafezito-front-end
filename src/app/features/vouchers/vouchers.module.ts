import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VouchersRoutingModule } from './vouchers-routing.module';
import { ListVouchersComponent } from './_components/list-vouchers/list-vouchers.component';
import { UserVouchersComponent } from './_components/user-vouchers/user-vouchers.component';
import { VouchersComponent } from './vouchers.component';


@NgModule({
  declarations: [ListVouchersComponent, UserVouchersComponent, VouchersComponent],
  imports: [
    CommonModule,
    VouchersRoutingModule
  ]
})
export class VouchersModule { }
