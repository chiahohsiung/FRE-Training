import { Directive, Input } from '@angular/core';
import { ValidatorFn, AbstractControl, NG_VALIDATORS, Validator, ValidationErrors} from '@angular/forms';

//A factory function return the validator function
export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? {forbiddenName: {value: control.value}} : null;
  };
}

@Directive({
  selector: '[appForbiddenName]',
  providers: [{provide: NG_VALIDATORS, useExisting: ForbiddenNameValidatorDirective, multi: true}]
})
export class ForbiddenNameValidatorDirective implements Validator{
  @Input('appForbiddenName') forbiddenName:string;
  
  validate(control: AbstractControl): ValidationErrors | null {
    return this.forbiddenName ? forbiddenNameValidator(new RegExp(this.forbiddenName, 'i'))(control)
                              : null;
  }

}
