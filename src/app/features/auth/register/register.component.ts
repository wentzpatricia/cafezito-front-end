import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageUtils } from '../../../core/utils/localstorage';
import { Validations } from '../../../core/utils/validations';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [` @import './../auth.component.scss'; `]
})
export class RegisterComponent implements OnInit {
  errorMessage!: string;
  form!: FormGroup;
  hide: boolean = true;
  hideConfirm: boolean = true;
  image = '../../../../assets/images/bg-login.png';
  logo = '../../../../assets/icones/logo-completo-dark.svg';
  logoLight = '../../../../assets/icones/logo-light.png';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
   this.createForm();
  }
  
  createForm() {
    this.form = this.formBuilder.group({
        email: ['', [Validators.email, Validators.required]],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
      },{
        validator: Validations.verifyPassword,
      }
    );
  }

  doRegister() {
    console.log("Usuário criado!")
    const localStorageUtils = new LocalStorageUtils();
    localStorageUtils.setItem('login', true)
    this.router.navigate(['/coffe-shop']);
  }

  showHideConfirmPassword() {
    this.hideConfirm = !this.hideConfirm;
  }

  showHidePassword() {
    this.hide = !this.hide;
  }
}
