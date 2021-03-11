import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomdirective]'
})
export class CustomdirectiveDirective {

  constructor(private element: ElementRef) {
    this.element.nativeElement.innerText = "This is the custom directives"
   }

}
