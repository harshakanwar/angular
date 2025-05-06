import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component' ;
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";

//import { NgFor, NgIf} from '@angular/common'; need to be imported in imports tag as well


@Component({
  selector: 'app-root',
  standalone: false,
  //imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
users = DUMMY_USERS;
selectedUsedId? : string;

name : string = '';

get selectedUser() {
  return this.users.find((user) => user.id === this.selectedUsedId);
}

onSelectUser(id: string) {  
  this.selectedUsedId = id;
}

}