import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], name:string): any {
    return name ? value.filter(item=>item.name.startsWith(name)) :value
    
  }

}
