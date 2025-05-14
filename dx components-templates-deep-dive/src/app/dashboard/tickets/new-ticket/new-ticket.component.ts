import { Component } from '@angular/core';
import { ButtonComponent } from "../../../shared/button/button.component";
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {

  // onSubmit(titleInput : HTMLInputElement, requestInput : HTMLInputElement){
  //   const enteredTitle = titleInput.value
  //   const enteredRequest = requestInput.value
  //   console.log("ENTERED VALUE", enteredTitle, enteredRequest)
  // }

  onSubmit(title : string , textInput : string, form : HTMLInputElement){
    console.log(title, textInput)
  }
}
