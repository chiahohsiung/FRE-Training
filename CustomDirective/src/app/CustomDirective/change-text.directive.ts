import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangeText]'
})
export class ChangeTextDirective {

  constructor(private element:ElementRef) { 
    element.nativeElement.innerText = "Text is changed by ChangeText Custom Directive."
  }

}
