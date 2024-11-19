import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoffeShopRoutingModule } from './coffe-shop-routing.module';
import { CoffeShopComponent } from './coffe-shop.component';
import { FilterComponent } from './_components/filter/filter.component';
import { ListComponent } from './_components/list/list.component';
import { DetailComponent } from './_components/detail/detail.component';

@NgModule({
  declarations: [
    CoffeShopComponent,
    DetailComponent,
    FilterComponent,
    ListComponent,
  ],
  imports: [CommonModule, CoffeShopRoutingModule],
})
export class CoffeShopModule {}
