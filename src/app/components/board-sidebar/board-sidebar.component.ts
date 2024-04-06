import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { FirstLetterPipe } from "../../pipes/first-letter.pipe";
import { Router, RouterModule } from '@angular/router';
import { ChevronIconComponent } from "../../icons/chevron-icon/chevron-icon.component";
import { WorkspaceIconComponent } from "../workspace-icon/workspace-icon.component";
import { MinusIconComponent } from "../../icons/minus-icon/minus-icon.component";
import { AppService } from '../../services/app.service';

@Component({
    selector: 'app-board-sidebar',
    standalone: true,
    templateUrl: './board-sidebar.component.html',
    styleUrl: './board-sidebar.component.css',
    imports: [
        CommonModule,
        RouterModule,
        FirstLetterPipe,
        ChevronIconComponent,
        WorkspaceIconComponent,
        MinusIconComponent
    ]
})
export class BoardSidebarComponent {

  appService = inject(AppService);
  router = inject(Router);
  sidebar: boolean = true;

  @Input({required: true}) workspace: any;
  @Input({ required: true }) board: any;

  closeBoard(boardId: number) {
    this.appService.closeBoard(this.workspace.id, boardId);
    this.router.navigate(['/']);
  }

}
