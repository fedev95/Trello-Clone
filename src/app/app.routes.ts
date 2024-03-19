import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component'),
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
      },
    ]
  },
  {
    path: 'board/:workspace-id/:board-id',
    loadComponent: () => import('./pages/board/board.component'),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
