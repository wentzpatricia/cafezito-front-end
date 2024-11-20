import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoffeShopRoutingModule } from './coffe-shop-routing.module';
import { CoffeShopComponent } from './coffe-shop.component';
import { FilterComponent } from './_components/filter/filter.component';
import { ListComponent } from './_components/list/list.component';
import { DetailComponent } from './_components/detail/detail.component';

import { ButtonModule } from 'primeng/button';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    CoffeShopComponent,
    DetailComponent,
    FilterComponent,
    ListComponent,
  ],
  imports: [ButtonModule, CommonModule, CoffeShopRoutingModule, SharedModule],
})
export class CoffeShopModule {}
