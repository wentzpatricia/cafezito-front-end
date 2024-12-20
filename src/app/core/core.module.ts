import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { HttpInterceptorService } from './interceptors/http.interceptor';

@NgModule({
  declarations: [],
  imports: [CommonModule,  HttpClientModule],
  exports: [ HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    },
  ],
})
export class CoreModule {}
