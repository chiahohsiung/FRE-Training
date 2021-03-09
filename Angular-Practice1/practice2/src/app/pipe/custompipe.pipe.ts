import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe'
})
export class CustompipePipe implements PipeTransform {

  transform(namelist: any[], args: string): any {
    if (!args){
      return namelist
    }
    return namelist.filter(name => name.name.startsWith(args))

  }

}
