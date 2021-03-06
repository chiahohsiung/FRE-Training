import {
    AbstractControl,
    ValidationErrors,
    ValidatorFn,
} from "@angular/forms"

export const confirmPassword: ValidatorFn = (
    control: AbstractControl
): ValidationErrors | null => {
    const password = control.get("password")
    const tryPass = control.get("password2")
    return password && tryPass && password.value !== tryPass.value
        ? { passError: true }
        : null
}
