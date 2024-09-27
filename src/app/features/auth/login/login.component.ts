import { Component, OnInit } from '@angular/core';
import { LocalStorageUtils } from '../../../core/utils/localstorage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthGuard } from '../../../core/guards/auth.guard';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [` @import './../auth.component.scss'; ` ]
})
export class LoginComponent implements OnInit {
  errorMessage!: string;
  formLogIn!: FormGroup;
  hide: boolean = true;
  image = '../../../../assets/images/bg-login.png';
  logo = '../../../../assets/icones/logo-dark.png';
  logoLight = '../../../../assets/icones/logo-light.png';
  
  constructor(
    private authService: AuthGuard,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createForm();

    if (this.isUserAuthenticated()) {
      this.router.navigate(['/coffe-shop']);
    }
  }

  createForm() {
    this.formLogIn = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required],
    });
  }

  doLogin(){
    const email = this.formLogIn.get('email')?.value;
    const password = this.formLogIn.get('password')?.value;
    const localStorageUtils = new LocalStorageUtils();
    if (email === 'cafezito@gmail.com' && password === '1234') {
      localStorageUtils.setItem('login', true)
      
    } else {
      this.errorMessage = 'Email ou senha inválidos. Por favor, tente novamente.';
    }
    if(this.authService.canActivate()){
      this.router.navigate(['/coffe-shop']);
    }
  }

  isUserAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  showHidePassword(){
    this.hide = !this.hide;
  }
}
