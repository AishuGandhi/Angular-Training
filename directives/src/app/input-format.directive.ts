import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  //@Input('format') format : string | undefined;

 // Use only if you have only 1 property with alias of directive name
  @Input('appInputFormat') format : string | undefined;
  //ElementRef service define in angular gives access to DOM objects
  constructor(private el:ElementRef) {

  }

  @HostListener('focus') onFocus(){
    console.log("On Focus");
  }
  @HostListener('blur') onBlur(){
    //gives access to actual DOM object
    let value:string = this.el.nativeElement.value;

    if(this.format == 'lowercase')
    this.el.nativeElement.value = value.toLowerCase();
    else
    this.el.nativeElement.value = value.toUpperCase();

  }


}
