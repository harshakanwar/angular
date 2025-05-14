import { Component } from '@angular/core';
import { DashboardItemComponent } from '../dashboard-item/dashboard-item.component';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { Ticket } from './ticket/ticket.model';
import { TicketComponent } from './ticket/ticket.component';
import { tick } from '@angular/core/testing';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [ NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
})
export class TicketsComponent {
  tickets: Ticket[] = [];

  onAdd(ticketData: { title: string; text: string }) {
    const ticket: Ticket = {
      id: Math.random.toString(),
      title: ticketData.title,
      request: ticketData.text,
      status: 'open',
    };
    this.tickets.push(ticket);

    console.log(this.tickets);
  }

  onCloseTicket(id : string){

     this.tickets = this.tickets.map((ticket) => {
      if(ticket.id === id){
        return { ...ticket , status:'closed'}
      }
      else return ticket;
     });
  }
}
