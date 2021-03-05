import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: string[], arg: string): string[] {
    return value.filter((ele)=>ele.startsWith(arg));
  }

}
