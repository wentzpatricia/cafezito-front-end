import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-password-validator',
  templateUrl: './password-validator.component.html',
  styleUrls: ['./password-validator.component.scss']
})
export class PasswordValidatorComponent {
  @Input() form!: FormGroup;
  @Input() passwordField!: string;
  @Input() confirmPasswordField!: string;

  get passwordMatch() {
    return this.form.get(this.passwordField)?.value === this.form.get(this.confirmPasswordField)?.value;
  }

  get passwordValid() {
    return this.form.controls[this.passwordField].errors === null;
  }

  get requiredValid() {
    return !this.form.controls[this.passwordField].hasError("required");
  }

  get minLengthValid() {
    return !this.form.controls[this.passwordField].hasError("minlength");
  }

  get requiresDigitValid() {
    return !this.form.controls[this.passwordField].hasError("requiresDigit");
  }

  get requiresUppercaseValid() {
    return !this.form.controls[this.passwordField].hasError("requiresUppercase");
  }

  get requiresLowercaseValid() {
    return !this.form.controls[this.passwordField].hasError("requiresLowercase");
  }

  get requiresSpecialCharsValid() {
    return !this.form.controls[this.passwordField].hasError("requiresSpecialChars");
  }

  
}
