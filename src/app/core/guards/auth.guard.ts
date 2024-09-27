import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LocalStorageUtils } from '../utils/localstorage';
import { LoginService } from '../../features/auth/login/_services/login.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate  {

  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(): boolean {
    const localStorageUtils = new LocalStorageUtils();
    if(this.isAuthenticated())
      return true

    this.loginService.logout();
    localStorageUtils.removeItem('login')
    return false;
  }

  isAuthenticated(): boolean {
    const localStorageUtils = new LocalStorageUtils();
    const login = localStorageUtils.getItem('login');
    return !!login;
  }
}
