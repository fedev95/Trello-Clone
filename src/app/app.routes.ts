import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component'),
    title: 'Trello',
    children: [
      {
        path: '',
        redirectTo: 'boards',
        pathMatch: 'full'
      },
      {
        path: 'boards',
        loadComponent: () => import('./pages/boards/boards.component'),
        title: 'Boards | Trello'
      },
      {
        path: 'workspace/:id',
        loadComponent: () => import('./pages/workspace/workspace.component'),
        title: 'workspace-name | Trello'
      },
    ]
  },
  {
    path: 'board/:workspace-id/:board-id',
    loadComponent: () => import('./pages/board/board.component'),
    title: 'board-name | Trello'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
