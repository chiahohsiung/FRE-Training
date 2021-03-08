import { AbstractControl, ValidationErrors } from '@angular/forms';

export function passwordMatch(
  control: AbstractControl
): ValidationErrors | null {
  const p = control.get('password')!.value;
  const cp = control.get('cfp')!.value;
  return p === cp ? null : { mismatch: true };
}
