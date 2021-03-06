
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';


export const identityRevealedValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password');
  const confirmpassword= control.get('confirmpassword');

  return password && confirmpassword && password.value !== confirmpassword.value ? { identityRevealed: true } : null;
};
