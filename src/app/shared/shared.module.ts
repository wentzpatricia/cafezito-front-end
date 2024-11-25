import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ToggleButtonModule } from 'primeng/togglebutton';

import { BackButtonComponent } from './back-button/back-button.component';
import { HeaderComponent } from './header/header.component';
import { FilterComponent } from './filter/filter.component';
import { LoadingComponent } from './loading/loading.component';
import { NavbarMobileComponent } from './navbar-mobile/navbar-mobile.component';
import { ProgressLoaderComponent } from './progress-loader/progress-loader.component';

@NgModule({
  declarations: [
    BackButtonComponent,
    HeaderComponent,
    FilterComponent,
    LoadingComponent,
    NavbarMobileComponent,
    ProgressLoaderComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ToggleButtonModule
  ],
  exports: [
    BackButtonComponent,
    HeaderComponent,
    FilterComponent,
    LoadingComponent,
    NavbarMobileComponent,
    ProgressLoaderComponent,
  ],
})
export class SharedModule {}
