import { AbstractControl, ValidationErrors} from '@angular/forms';

export function gte(control: AbstractControl):ValidationErrors|null{
    const v = control.value;

    if(isNaN(v)){
        return {'gte':true, 'requiredValue':"should be int"};
    }

    if(v<10){
        return {'gte':true, 'requiredValue':"the number should greater than 10"};
    }

    return null;
}