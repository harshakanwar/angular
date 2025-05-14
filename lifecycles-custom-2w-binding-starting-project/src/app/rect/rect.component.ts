import { Component, EventEmitter, Input, model, Output } from '@angular/core';

@Component({
  selector: 'app-rect',
  standalone: true,
  imports: [],
  templateUrl: './rect.component.html',
  styleUrl: './rect.component.css',
})
export class RectComponent {
  // Todo: Implement custom two-way binding

  @Input({required : true}) size! : {width : string ; height : string}
  @Output() sizeChange = new EventEmitter<{width : string ; height : string}>();

  // for Angular 17.2 or greater more simpler version
  // size = model.required<{ width: string; height: string }>();
  //  onReset() {
  //   this.size.set({
  //     width: '100',
  //     height: '100',
  //   });
    
  // }
  onReset() {
    this.sizeChange.emit({
      width: '100',
      height: '100',
    });
    // this.size.width = '100'
    // this.size.height = '100'  // Just this 2 lines work without outpur
  }
}
