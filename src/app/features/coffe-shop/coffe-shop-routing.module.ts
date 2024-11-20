import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoffeShopComponent } from './coffe-shop.component';
import { DetailComponent } from './_components/detail/detail.component';

const routes: Routes = [
  { path: '', component: CoffeShopComponent },
  { path: ':id', component: DetailComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoffeShopRoutingModule { }
