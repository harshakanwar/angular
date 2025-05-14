import { Component, EventEmitter, input, output, Output, signal } from '@angular/core';
import { Ticket } from './ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {

  data = input.required<Ticket>();
  detailsVisible = signal(false);
  close = output();

  onToggleDetails(){
    //this.detailsVisible.set(!this.detailsVisible())
    this.detailsVisible.update((wasVisible) => !wasVisible);
  }

  onMarkTicketAsCompleted(){
    this.close.emit();
  }

}
