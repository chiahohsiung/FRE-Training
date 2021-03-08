import { AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export const confirm: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const p = control.get('password');
    const cp = control.get('cPassword');

    if (p && cp) {  
        if (p.value !== cp.value) {
            return {passwordError: true}
        }
    }
    return null;
}