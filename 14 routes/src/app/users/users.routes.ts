import { ResolveFn, Routes } from '@angular/router';
import {
  canLeaveEditPage,
  NewTaskComponent,
} from '../tasks/new-task/new-task.component';
import { inject } from '@angular/core';
import { TasksService } from '../tasks/tasks.service';
import { Task } from '../tasks/task/task.model';
import { resolveUserTasks, TasksComponent } from '../tasks/tasks.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tasks',
    pathMatch: 'prefix',
  },
  {
    path: 'tasks', //<domain>/users/{userId}/tasks
    component: TasksComponent,
    // loadComponent: () =>
    //   import('../tasks/tasks.component').then((mod) => mod.TasksComponent),
    runGuardsAndResolvers: 'always',
    resolve: {
      userTasks: resolveUserTasks,
    },
  },
  {
    path: 'tasks/new',
    component: NewTaskComponent,
    canDeactivate: [canLeaveEditPage],
  },
];
