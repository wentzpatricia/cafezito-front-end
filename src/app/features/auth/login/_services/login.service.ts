import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageUtils } from '../../../../core/utils/localstorage';

@Injectable({ providedIn: 'root' })
export class LoginService {
  constructor( private router: Router) {}
  
  logout() {
    const localStorageUtils = new LocalStorageUtils();
    localStorageUtils.clearLoggedData('login');

    this.router.navigate(['/auth/login'], { queryParams: {} });
  }

}
