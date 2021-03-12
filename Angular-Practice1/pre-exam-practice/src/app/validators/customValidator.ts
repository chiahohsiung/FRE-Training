import { AbstractControl, ValidationErrors } from "@angular/forms";

export function gte(control:AbstractControl):ValidationErrors | null{
    const v1 = control.value.password;
    const v2 = control.value.confirmpassword;

    if(v1!==v2){
        return {gte:true, message:"ConfirmPassword does not match password!"}
    }
    return null
}