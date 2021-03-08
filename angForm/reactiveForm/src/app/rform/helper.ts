import {AbstractControl, FormGroup, ValidationErrors} from '@angular/forms';

export function confirmingPassword(c: AbstractControl): ValidationErrors | null{
    if(c.get('password').value !== c.get('confirmPassword').value){
        return {invalid: true};
    }

    return null;
}