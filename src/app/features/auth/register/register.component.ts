import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MessageService } from 'primeng/api';

import { PostRegisterUserService } from './_services/post-register-user.service';
import { User } from './_models/user.interface';
import { Validations } from '../../../core/validators/validations';

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
    private messageService: MessageService,
    private postRegisterUserService: PostRegisterUserService,
    private router: Router
  ) { }

  ngOnInit(): void {
   this.createForm();
  }
  
  createForm() {
    this.form = this.formBuilder.group({
        email: ['', [Validators.email, Validators.required]],
        password: [
          '', Validators.compose([
            Validators.required,
            Validators.minLength(8),
            Validations.patternValidator(new RegExp("(?=.*[0-9])"), {
              requiresDigit: true
            }),
            Validations.patternValidator(new RegExp("(?=.*[A-Z])"), {
              requiresUppercase: true
            }),
            Validations.patternValidator(new RegExp("(?=.*[a-z])"), {
              requiresLowercase: true
            }),
            Validations.patternValidator(new RegExp("(?=.*[$@^!%*?&])"), {
              requiresSpecialChars: true
            })
          ])
        ],
        confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
      },{
        validator: Validations.verifyPassword,
      }
    );
  }

  doRegister() {

    const { email, password } = this.form.value;
    const body: User = { email, password };
    
    this.postRegisterUserService.postRegisterUser(body).subscribe({
      next: () => {
        this.form.reset();
        setTimeout(()=> { this.router.navigate(['auth/login']); }, 1000)
        this.messageService.add({ severity: 'success', summary: 'Successo', detail: 'Conta criada!' });
      }, 
      error: (err) => {
        this.errorMessage = err.error.message;
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: this.errorMessage });
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
