import { ButtonModule } from 'primeng/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import { DividerModule } from 'primeng/divider';



@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule,ButtonModule, SharedModule,DividerModule],

})
export class HomeModule {
  
}
