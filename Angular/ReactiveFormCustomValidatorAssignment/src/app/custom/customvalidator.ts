import { AbstractControl, ValidationErrors } from "@angular/forms";
export function gte(control: AbstractControl): ValidationErrors | null {
    const v = control.get('password')!.value
    const v2 = control.get('confirmPassword')!.value
    
    if (v !== v2) {
        console.log("HERE")
        return { 'gte': true, 'requiredValue': 'Confirm password does not match' }
    }
    return null
}