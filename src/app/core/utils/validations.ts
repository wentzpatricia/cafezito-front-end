import { AbstractControl } from '@angular/forms';

export class Validations {
  static verifyPassword(controle: AbstractControl) {
    const senha = controle.get('password')?.value;
    const confirmarSenha = controle.get('confirmPassword')?.value;
    if (senha === confirmarSenha) return null;

    return controle
      .get('confirmPassword')
      ?.setErrors({ invalidPassword: true });
  }
}
