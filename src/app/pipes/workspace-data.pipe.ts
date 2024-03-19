import { Pipe, PipeTransform, inject } from '@angular/core';
import { AppService } from '../services/app.service';

@Pipe({
  name: 'workspaceData',
  standalone: true
})
export class WorkspaceDataPipe implements PipeTransform {

  appService = inject(AppService);

  transform(value: any, ...args: unknown[]): any {
    let workspaceData: any;
    this.appService.getWorkspace(value).subscribe({
      next: (res) => {
        if (res) {
          workspaceData = res;
        }
      }
    });
    return workspaceData;
  }

}
