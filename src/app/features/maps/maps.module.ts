import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsComponent } from './maps.component';
import { MapsRoutingModule } from './maps-routing.module';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [MapsComponent],
  imports: [
    CommonModule,
    MapsRoutingModule,
    SharedModule,
  ]
})
export class MapsModule { }
