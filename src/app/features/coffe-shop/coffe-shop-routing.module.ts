import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoffeShopComponent } from './coffe-shop.component';


const routes: Routes = [{ path: '', component: CoffeShopComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoffeShopRoutingModule { }
