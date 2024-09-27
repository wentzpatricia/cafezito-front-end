import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { LoaderInterceptor } from './interceptors/loader.interceptor';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers:[
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
  ]
})
export class CoreModule {}
