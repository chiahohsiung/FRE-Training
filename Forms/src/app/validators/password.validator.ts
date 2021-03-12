import { AbstractControl } from '@angular/forms';

export class PasswordValidator {
  constructor() {}
  validate(control: AbstractControl) {
    // The value that is being validated
    const value = control.value;
    /**
     * The regex checks the following:
     * Minumum 8 characters,
     * At least a number, lowercase letter, uppercase letter and
     * Special character
     */
    let regex = /^[a-zA-Z0-9!"#\$%&'\(\)\*\+,-\.\/:;<=>\?@[\]\^_`\{\|}~]{8,}$/;

    if (regex.test(value)) {
      return null;
    } else {
      return { invalid: true, errMess: 'This password is not valid' };
    }
  }
}
