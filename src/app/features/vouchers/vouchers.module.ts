import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';

import { SharedModule } from '../../shared/shared.module';
import { VouchersRoutingModule } from './vouchers-routing.module';

import { ListVouchersComponent } from './_components/list-vouchers/list-vouchers.component';
import { UserVouchersComponent } from './_components/user-vouchers/user-vouchers.component';
import { VouchersComponent } from './vouchers.component';
import { QrCodeComponent } from './_components/qr-code/qr-code.component';

import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [ListVouchersComponent, UserVouchersComponent, VouchersComponent, QrCodeComponent ],
  imports: [
    ButtonModule,
    CommonModule,
    DynamicDialogModule,
    SharedModule,
    TabViewModule,
    ToastModule,
    VouchersRoutingModule
  ],
  providers:[DialogService, MessageService]
})
export class VouchersModule { }
