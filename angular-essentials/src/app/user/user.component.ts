import { Component, Input, Output, EventEmitter, output } from '@angular/core'; // removed computed and signal imports as they are not used in this code snippet

import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";
//import { DUMMY_USERS } from '../dummy-users';

//onst randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// };

// interface User{
//   id: string;
//   avatar: string;
//   name: string;
// };

// With interfaces, we can only define objects but with type keywords we can define objects, arrays, functions, etc.

@Component({
  selector: 'app-user',
  standalone : false,
  //imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  /* selectedUser = DUMMY_USERS[randomIndex];
  selectedUser = signal(DUMMY_USERS[randomIndex]);
  imagePath = computed(() => {
    return 'assets/users/' + this.selectedUser().avatar;  
  });

  get imagePath(){

    return 'assets/users/' + this.selectedUser.avatar 
   }

   onselectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex]);
    this.selectedUser = DUMMY_USERS[randomIndex];
   }
    */

  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;
  @Output() select = new EventEmitter<string>();
  //select = output<string>();
  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onselectUser() {
    this.select.emit(this.user.id);
  }
}
