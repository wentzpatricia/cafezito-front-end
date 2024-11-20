import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, tap, finalize } from 'rxjs/operators';

import { LoaderService } from '../services/loader.service';
import { LocalStorageUtils } from '../utils/localstorage';
import { Router } from '@angular/router';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  constructor(
    private loaderService: LoaderService,
    private router: Router
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loaderService.show();

    const localStorageUtils = new LocalStorageUtils();
    const token = localStorageUtils.getToken();

    const modifiedReq = token ? this.addToken(req, token) : req;

    return next.handle(modifiedReq).pipe(
      tap({
        next: (event) => {
          if (event instanceof HttpResponse) {
          }
        },
      }),
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.handleUnauthorized();
        }
        return throwError(() => error);
      }),
      finalize(() => {
        this.loaderService.hide();
      })
    );
  }

  private addToken(request: HttpRequest<any>, token: string): HttpRequest<any> {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json;charset=utf-8',
      },
    });
  }

  private handleUnauthorized(): void {
    const localStorageUtils = new LocalStorageUtils();
    localStorageUtils.clearLoggedData();
    this.router.navigate(['/auth']);
  }
}
