import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';

import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { PasswordValidatorComponent } from './password-validator/password-validator.component';
import { RegisterComponent } from './register/register.component';

import { SharedModule } from '../../shared/shared.module';
import { MessageService } from 'primeng/api';

@NgModule({
  declarations: [AuthComponent, LoginComponent, PasswordValidatorComponent, RegisterComponent],
  imports: [
    AuthRoutingModule,
    ButtonModule,
    CommonModule,
    InputTextModule,
    FormsModule,
    NgOptimizedImage,
    ReactiveFormsModule,
    SharedModule,
    ToastModule
  ],
  providers:[MessageService]
})
export class AuthModule {}
