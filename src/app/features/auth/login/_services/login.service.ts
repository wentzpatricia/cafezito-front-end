import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';

import { LocalStorageUtils } from '../../../../core/utils/localstorage';
import { RequestsService } from '../../../../core/services/requests.service';

import { User } from '../../register/_models/user.interface';

@Injectable({ providedIn: 'root' })
export class LoginService {
  localStorageUtils = new LocalStorageUtils();

  constructor(
    private requestsService: RequestsService,
    private router: Router
  ) {}

  logout() {
    const localStorageUtils = new LocalStorageUtils();
    localStorageUtils.clearLoggedData();

    this.router.navigate(['/auth/login'], { queryParams: {} });
  }

  postLogin(user: User): Observable<User> {
    const url = `auth/login`;
    const body = user;
    return this.requestsService.executePost({ url, body });
  }
}
