import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse,} from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap, finalize } from 'rxjs/operators';

import { LoaderService } from '../services/loader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(private loaderService: LoaderService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.show();

    return next.handle(req).pipe(
      tap({
        next: (event) => {
          if (event instanceof HttpResponse) {
          }
        },
        error: (error: HttpErrorResponse) => {
        }
      }),
      finalize(() => {
        this.loaderService.hide();
      })
    );
  }
}
