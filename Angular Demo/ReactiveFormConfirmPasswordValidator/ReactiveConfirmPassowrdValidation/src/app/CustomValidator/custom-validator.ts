import { FormGroup } from "@angular/forms";

export function ConfirmPasswordValidator(passowrdControlName: string, confirmPasswordControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[passowrdControlName];
        const matchingControl = formGroup.controls[confirmPasswordControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            return;
        }


        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}