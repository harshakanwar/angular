import { Component, ElementRef, HostBinding, HostListener, inject, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation : ViewEncapsulation.None,
  host: {
    class : 'control',
    '(click)' : 'onClick()'
  }
})
export class ControlComponent {

  //@HostBinding('class') className = "control";
  // this exists for backwards compatibility should use host: in @Component 
  // @HostListener('click') onClick(){
  //   console.log('Clicked !')
  // }
  // Again alternative and less used nowadays
  @Input({required : true}) label! : string;
  //private el = inject(ElementRef)


  onClick(){
    console.log('Clicked !')
    //console.log(this.el);
  }
}
