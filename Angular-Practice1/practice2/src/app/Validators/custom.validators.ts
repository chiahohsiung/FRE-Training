import { AbstractControl, ValidationErrors } from '@angular/forms';

export function gte(cv: AbstractControl): ValidationErrors | null {
    let v1 = cv.value.password;
    let v2 = cv.value.confirmpassword;

    if (v1 !== v2) {
        return {
            gte: true,
            requiredValue: "Confirm password doesn't match password",
        };
    }

    return null;
}
