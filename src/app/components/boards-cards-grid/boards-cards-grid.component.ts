import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BoardPreviewCardComponent } from "../board-preview-card/board-preview-card.component";
import { AppService } from '../../services/app.service';

@Component({
    selector: 'app-boards-cards-grid',
    standalone: true,
    templateUrl: './boards-cards-grid.component.html',
    styleUrl: './boards-cards-grid.component.css',
    imports: [
        CommonModule,
        RouterModule,
        BoardPreviewCardComponent
    ]
})
export class BoardsCardsGridComponent {

  @Input({required: true}) workspace: any;
  appService = inject(AppService)

  showCreateBoardModal(workspaceId: number) {
    this.appService.setCreateBoardWorkspace(workspaceId);
  }

}
