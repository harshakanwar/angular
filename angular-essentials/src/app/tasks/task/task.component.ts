import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { Task } from './task.model';
import { NewTaskComponent } from "../new-task/new-task.component";
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';


// interface Task {
//   id: string,
//         userId: string,
//         title: string,
//         summary:string,
//         dueDate: string,
// }
@Component({
  selector: 'app-task',
  standalone : false,
  //imports: [NewTaskComponent, CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  @Input({required:true}) task! : Task
  private tasksService = inject(TasksService);

  onCompleteTask(){
    this.tasksService.removeTask(this.task.id);
  }

}
