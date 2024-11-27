import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderHomeComponent } from './header-home/header-home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule,HeaderHomeComponent,ButtonModule],

})
export class HomeModule {
  
}
