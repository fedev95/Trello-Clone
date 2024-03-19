import { Pipe, PipeTransform, inject } from '@angular/core';
import { AppService } from '../services/app.service';

@Pipe({
  name: 'boardData',
  standalone: true
})
export class BoardDataPipe implements PipeTransform {

  appService = inject(AppService);

  transform(value: any, ...args: unknown[]): any {
    let board: any;
    this.appService.getBoardById(value.workspaceId, value.boardId).subscribe({
      next: (res) => {
        board = res;
      }
    });
    return board;
  }

}
