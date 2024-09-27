import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoffeShopRoutingModule } from './coffe-shop-routing.module';
import { CoffeShopComponent } from './coffe-shop.component';


@NgModule({
  declarations: [CoffeShopComponent],
  imports: [
    CommonModule,
    CoffeShopRoutingModule
  ]
})
export class CoffeShopModule { }
