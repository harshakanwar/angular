import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewTask } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter();
  
  enteredTitle = ''
  enteredSummary = ''
  enteredDate = '';
  private tasksService = inject(TasksService);

  onCancel(){
    console.log('Hi Harsha')
    this.close.emit();
  }

  onSubmit(){
    this.tasksService.addTask(
      {
        title : this.enteredTitle,
         summary : this.enteredSummary,
          date : this.enteredDate
        }, this.userId);
        this.close.emit();

  }


}
