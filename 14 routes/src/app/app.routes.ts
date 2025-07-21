import { CanMatchFn, RedirectCommand, Router, Routes } from '@angular/router';

import { NoTaskComponent } from './tasks/no-task/no-task.component';
import {
  resolveTitle,
  resolveUserNames,
  UserTasksComponent,
} from './users/user-tasks/user-tasks.component';
import { NotFoundComponent } from './notFound/not-found.component';
import { inject } from '@angular/core';

const dummyCanMatch: CanMatchFn = (route, segments) => {
  const router = inject(Router);
  const shouldGetAccess = Math.random();

  if (shouldGetAccess < 1) return true;
  else return new RedirectCommand(router.parseUrl('/unauthorized'));
};
export const routes: Routes = [
  {
    path: '',
    component: NoTaskComponent,
    title: 'Nothing',
  },
  {
    path: 'users/:userId', //<domain>/users/{userId}
    component: UserTasksComponent,
    loadChildren: () =>
      import('./users/users.routes').then((mod) => mod.routes),
    canMatch: [dummyCanMatch],
    data: {
      message: 'Hello All',
    },
    resolve: {
      userName: resolveUserNames,
    },
    title: resolveTitle,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
