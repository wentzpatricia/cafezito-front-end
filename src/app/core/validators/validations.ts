import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class Validations {

  static patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null;
      }
  
      const valid = regex.test(control.value);
  
      return valid ? null : error;
    };
  }


  static verifyPassword(controle: AbstractControl) {
    const password = controle.get('password')?.value;
    const confirmarSenha = controle.get('confirmPassword')?.value;
    if (password === confirmarSenha) return null;

    return controle
      .get('confirmPassword')
      ?.setErrors({ invalidPassword: true });
  }
}
