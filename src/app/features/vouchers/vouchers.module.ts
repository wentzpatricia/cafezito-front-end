import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';

import { SharedModule } from '../../shared/shared.module';
import { VouchersRoutingModule } from './vouchers-routing.module';

import { ListVouchersComponent } from './_components/list-vouchers/list-vouchers.component';
import { UserVouchersComponent } from './_components/user-vouchers/user-vouchers.component';
import { VouchersComponent } from './vouchers.component';

@NgModule({
  declarations: [ListVouchersComponent, UserVouchersComponent, VouchersComponent],
  imports: [
    ButtonModule,
    CommonModule,
    SharedModule,
    TabViewModule,
    VouchersRoutingModule
  ]
})
export class VouchersModule { }
