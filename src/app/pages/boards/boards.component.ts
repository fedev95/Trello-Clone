import { Component, OnInit, inject } from '@angular/core';
import { AppService } from '../../services/app.service';
import { CommonModule } from '@angular/common';
import { FirstLetterPipe } from "../../pipes/first-letter.pipe";
import { RouterModule } from '@angular/router';
import { BoardsCardsGridComponent } from "../../components/boards-cards-grid/boards-cards-grid.component";
import { ClockIconComponent } from "../../icons/clock-icon/clock-icon.component";
import { BoardPreviewCardComponent } from "../../components/board-preview-card/board-preview-card.component";
import { WorkspaceIconComponent } from "../../components/workspace-icon/workspace-icon.component";

@Component({
    selector: 'app-boards',
    standalone: true,
    templateUrl: './boards.component.html',
    styleUrl: './boards.component.css',
    host: { 'class': 'flex flex-grow' },
    imports: [
        CommonModule,
        FirstLetterPipe,
        RouterModule,
        BoardsCardsGridComponent,
        ClockIconComponent,
        BoardPreviewCardComponent,
        WorkspaceIconComponent
    ]
})
export default class BoardsComponent implements OnInit {

  appService = inject(AppService);

  data = this.appService.dataObservable;

  recents: any = [];

  ngOnInit(): void {
    this.getRecents();
  }

  getRecents() {
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

}
