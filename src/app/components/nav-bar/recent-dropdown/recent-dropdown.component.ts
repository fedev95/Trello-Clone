import { CdkMenuTrigger, CdkMenu, CdkMenuItem } from '@angular/cdk/menu';
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppService } from '../../../services/app.service';
import { ChevronIconComponent } from "../../../icons/chevron-icon/chevron-icon.component";

@Component({
    selector: 'app-recent-dropdown',
    standalone: true,
    templateUrl: './recent-dropdown.component.html',
    styleUrl: './recent-dropdown.component.css',
    imports: [
        CommonModule,
        RouterModule,
        CdkMenuTrigger,
        CdkMenu,
        CdkMenuItem,
        ChevronIconComponent
    ]
})
export class RecentDropdownComponent implements OnInit {

  @Input({required: true}) boardPage!: boolean;

  appService = inject(AppService);

  data = this.appService.dataObservable;

  recents: any[] = [];

  ngOnInit(): void {
    this.data.subscribe({
      next: (res) => {
        res.recent.forEach((element: any) => {
          let workspaceAux;
          let boardAux;
          workspaceAux = res.workspaces.find((workspace: any) => workspace.id == element.workspaceId);
          boardAux = workspaceAux.boards.find((board: any) => board.id == element.boardId);
          this.recents.push(boardAux)
        });
      }
    });
  }

  searchWorkspace(workspaceId: number) {
    let aux;
    this.data.subscribe({
      next: (res) => {
        aux = res.workspaces.find((workspace: any) => workspace.id == workspaceId);        
      }
    })
    return aux!.title;
  }

}
