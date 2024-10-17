import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthGuard } from '../../../core/guards/auth.guard';
import { LoginService } from './_services/login.service';

import { ApiResponseModel } from '../../../core/models/api-response.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
    `
      @import './../auth.component.scss';
    `,
  ],
})
export class LoginComponent implements OnInit {
  errorMessage!: string | null;
  formLogIn!: FormGroup;
  isLoading: boolean = false;
  hide: boolean = true;
  image = '../../../../assets/images/bg-login.png';
  logo = '../../../../assets/icones/logo-completo-dark.svg';
  logoLight = '../../../../assets/icones/logo-light.png';

  constructor(
    private authService: AuthGuard,
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createForm();

    if (this.isUserAuthenticated()) {
      this.router.navigate(['/coffe-shop']);
    }

    this.formLogIn.valueChanges.subscribe(() => {
      this.errorMessage = null;
    });
  }

  createForm() {
    this.formLogIn = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required],
    });
  }

  doLogin() {
    this.isLoading = true;

    this.loginService.postLogin(this.formLogIn.value).subscribe({
      next: (res: ApiResponseModel<any>) => {
        this.loginService.localStorageUtils.saveUser(res);
        this.router.navigate(['/coffe-shop']);
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = err.error.message;
        this.isLoading = false;
      },
    });
  }

  isUserAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  showHidePassword() {
    this.hide = !this.hide;
  }
}
