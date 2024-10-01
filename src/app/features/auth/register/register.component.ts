import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LocalStorageUtils } from '../../../core/utils/localstorage';
import { Validations } from '../../../core/utils/validations';

import { PostRegisterUserService } from './_services/post-register-user.service';

import { ApiResponseModel } from '../../../core/models/api-response.interface';
import { User } from './_models/user.interface';
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
    private postRegisterUserService: PostRegisterUserService,
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

    const { email, password } = this.form.value;
    const body: User = { email, password };
    
    this.postRegisterUserService.postRegisterUser(body).subscribe({
      next: (res: ApiResponseModel<any>) => {
        console.log(res)
        console.log("Usuário criado!")
        this.router.navigate(['auth/login']);
      }, 
      error: (err) => {
        this.errorMessage = err.error.message;
        console.error(err);
      }
    })

    
  }

  showHideConfirmPassword() {
    this.hideConfirm = !this.hideConfirm;
  }

  showHidePassword() {
    this.hide = !this.hide;
  }
}
