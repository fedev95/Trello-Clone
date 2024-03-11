import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { AppService } from '../../services/app.service';
import { TaskCardListComponent } from "../../components/task-card-list/task-card-list.component";
import { MenuDotsIconComponent } from "../../icons/menu-dots/menu-dots-icon.component";
import { BoardSidebarComponent } from "../../components/board-sidebar/board-sidebar.component";
import { BoardSettingsComponent } from "../../components/board-settings/board-settings.component";
import { BoardService } from '../../services/board.service';
import { PlusIconComponent } from "../../icons/plus-icon/plus-icon.component";
import { XmarkIconComponent } from "../../icons/xmark-icon/xmark-icon.component";
import { NewListFormComponent } from "../../components/new-list-form/new-list-form.component";

@Component({
    selector: 'app-board',
    standalone: true,
    templateUrl: './board.component.html',
    styleUrl: './board.component.css',
    host: { 'class': 'flex flex-grow flex-col overflow-auto' },
    imports: [
        CommonModule,
        TaskCardListComponent,
        MenuDotsIconComponent,
        BoardSidebarComponent,
        BoardSettingsComponent,
        PlusIconComponent,
        XmarkIconComponent,
        NewListFormComponent
    ]
})
export default class BoardComponent implements OnInit {

  @Input()
  set 'workspace-id'(heroId: string) {
    this.workspaceId = heroId; 
  }

  @Input()
  set 'board-id'(heroId: string) {
    this.boardId = heroId;
    this.builder = false;
    this.appService.setSelectedBoard(this.workspaceId, this.boardId);
    this.appService.getWorkspace().subscribe({
      next: (res) => this.workspace = res
    })
    this.appService.getBoard().subscribe({
      next: (res) => this.board = res
    })
  }

  appService = inject(AppService);
  workspaceId!: string;
  boardId!: string;
  workspace: any;
  board: any;

  builder: boolean = false;

  // ==============================================

  pointerScroll() {
    let isDrag = true;
    let elem = document.getElementById('board-content');
    elem?.setAttribute("style", "user-select: none;");
    const dragEnd = () => {
      isDrag = false;
      elem?.setAttribute("style", "user-select: auto;");
    }
    const drag = (ev: any) => isDrag && (elem!.scrollLeft -= ev.movementX);
    addEventListener("pointermove", drag);
    addEventListener("pointerup", dragEnd);
  };

  // ============

  boardService = inject(BoardService);

  menu: boolean = false;
  settings: any;

  ngOnInit(): void {
    this.settings = this.boardService.getSettingsSidebar();
  }

  setSettingsSidebar(value: boolean) {
    this.boardService.setSettingsSidebar(value);
  }

}
