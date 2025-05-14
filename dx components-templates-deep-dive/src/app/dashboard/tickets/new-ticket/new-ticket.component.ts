import {
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  viewChild,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';
import { Ticket } from '../ticket/ticket.model';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  //private form = viewChild<ElementRef<HTMLFormElement>>('form');
  @ViewChild('form') form?: ElementRef<HTMLFormElement>;

  @Output() add = new EventEmitter<{title : string, text : string}>();

  ngOnInit() {
    console.log('ON INIT');
    console.log(this.form?.nativeElement);
  }

  ngAfterViewInit() {
    console.log('AFTER VIEW INIT');
    console.log(this.form?.nativeElement);
  }

  // onSubmit(titleInput : HTMLInputElement, requestInput : HTMLInputElement){
  //   const enteredTitle = titleInput.value
  //   const enteredRequest = requestInput.value
  //   console.log("ENTERED VALUE", enteredTitle, enteredRequest)
  // }

  onSubmit(title: string, textInput: string) {
    this.add.emit({ title : title, text : textInput})
    this.form?.nativeElement.reset();

    //this.form()?.nativeElement.reset(); // for signal viewChild
  }
}
