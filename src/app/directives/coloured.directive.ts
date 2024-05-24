import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appColoured]',
  standalone: true
})
export class ColouredDirective {

  @Input() appColoured:string = "";

  constructor(
      private _el: ElementRef  
  ){
     
  }


  @HostListener("mouseenter") metot(){
     this._el.nativeElement.style.backgroundColor = this.appColoured
  }

  @HostListener("mouseleave") metot2(){
      this._el.nativeElement.style.backgroundColor = "white"
       
   }

}
