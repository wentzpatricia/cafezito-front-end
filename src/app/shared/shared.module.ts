import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BackButtonComponent } from './back-button/back-button.component';
import { HeaderComponent } from './header/header.component';
import { LoadingComponent } from './loading/loading.component';
import { NavbarMobileComponent } from './navbar-mobile/navbar-mobile.component';
import { ProgressLoaderComponent } from './progress-loader/progress-loader.component';

@NgModule({
  declarations: [
    BackButtonComponent,
    HeaderComponent,    
    LoadingComponent,
    NavbarMobileComponent,
    ProgressLoaderComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    BackButtonComponent,
    HeaderComponent,    
    LoadingComponent,
    NavbarMobileComponent,
    ProgressLoaderComponent,
  ],
})
export class SharedModule {}
