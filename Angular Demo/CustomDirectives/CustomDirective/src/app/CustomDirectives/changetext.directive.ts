import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangetext]'
})
export class ChangetextDirective {

  constructor(private element: ElementRef) {
    element.nativeElement.innerText = 'Text is changes by appChangetext Directory. ';
  }

}
