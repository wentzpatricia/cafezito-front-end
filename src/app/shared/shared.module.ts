import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackButtonComponent } from './back-button/back-button.component';
import { ProgressLoaderComponent } from './progress-loader/progress-loader.component';


@NgModule({
  declarations: [BackButtonComponent, ProgressLoaderComponent],
  imports: [CommonModule],
  exports: [BackButtonComponent, ProgressLoaderComponent]
})
export class SharedModule {}
