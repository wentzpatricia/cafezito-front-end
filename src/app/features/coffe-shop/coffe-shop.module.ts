import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { CoffeShopRoutingModule } from './coffe-shop-routing.module';
import { CoffeShopComponent } from './coffe-shop.component';
import { DetailComponent } from './_components/detail/detail.component';
import { DialogModule } from 'primeng/dialog';
import { FilterComponent } from './_components/filter/filter.component';
import { FormRatingComponent } from './_components/form-rating/form-rating.component';
import { ListComponent } from './_components/list/list.component';
import { ListRatingComponent } from './_components/list-rating/list-rating.component';

import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FloatLabelModule } from 'primeng/floatlabel';
import { RatingModule } from 'primeng/rating';
import { SharedModule } from '../../shared/shared.module';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';

import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [
    CoffeShopComponent,
    DetailComponent,
    FilterComponent,
    FormRatingComponent,
    ListComponent,
    ListRatingComponent
  ],
  imports: [
    ButtonModule, 
    CommonModule, 
    CoffeShopRoutingModule, 
    DialogModule,
    InputTextareaModule,
    FloatLabelModule,
    ReactiveFormsModule,
    FormsModule,
    RatingModule,
    SharedModule,
    ToastModule,
    ToggleButtonModule
  ],
  providers:[MessageService]
})
export class CoffeShopModule {}
