import { FormGroup } from "@angular/forms";

export function ConfirmPasswordValidator(passowrdControlName: string, confirmPasswordControlName: string) {
    return (formGroup: FormGroup) => {
        //get value of password 
        const control = formGroup.controls[passowrdControlName];
        //get value of confirmPassword
        const matchingControl = formGroup.controls[confirmPasswordControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            return;
        }

        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({mustMatch: true});
        } else {
            matchingControl.setErrors(null);
        }
    }
}