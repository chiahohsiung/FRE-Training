import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strongtext'
})
export class StrongtextPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if(value){
      const val = value.bold().italics();
      return val;
    }

  }

}
