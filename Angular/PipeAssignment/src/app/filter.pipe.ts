import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(namelists:any[], args: string, args2:string): any {
    return namelists.filter(name=> name.startsWith(args))

    
  }

}
