import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoffeShopRoutingModule } from './coffe-shop-routing.module';
import { CoffeShopComponent } from './coffe-shop.component';
import { DetailComponent } from './_components/detail/detail.component';
import { FilterComponent } from './_components/filter/filter.component';
import { FormRatingComponent } from './_components/form-rating/form-rating.component';
import { ListComponent } from './_components/list/list.component';
import { ListRatingComponent } from './_components/list-rating/list-rating.component';

import { ButtonModule } from 'primeng/button';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    CoffeShopComponent,
    DetailComponent,
    FilterComponent,
    FormRatingComponent,
    ListComponent,
    ListRatingComponent
  ],
  imports: [ButtonModule, CommonModule, CoffeShopRoutingModule, SharedModule],
})
export class CoffeShopModule {}
