import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, inject } from '@angular/core';
import { AppService } from '../../services/app.service';
import { TaskCardListComponent } from "../../components/task-card-list/task-card-list.component";
import { MenuDotsIconComponent } from "../../icons/menu-dots/menu-dots-icon.component";
import { BoardSidebarComponent } from "../../components/board-sidebar/board-sidebar.component";
import { BoardSettingsComponent } from "../../components/board-settings/board-settings.component";
import { BoardService } from '../../services/board.service';
import { NewListFormComponent } from "../../components/new-list-form/new-list-form.component";
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap } from '@angular/router';

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
        NewListFormComponent
    ]
})
export default class BoardComponent implements OnInit {

  // @Input()
  // set 'workspace-id'(workspaceId: string) {
  //   this.workspaceId = workspaceId;
  //   this.getBoard();
  // }
  // @Input()
  // set 'board-id'(boardId: string) {
  //   this.boardId = boardId;
  //   this.getBoard();
  // }

  constructor(private titleService: Title) {}

  appService = inject(AppService);
  boardService = inject(BoardService);
  route = inject(ActivatedRoute);
  workspaceId!: any;
  boardId!: any;
  workspace: any;
  board: any;
  settings: any;

  ngOnInit(): void {
    this.settings = this.boardService.getSettingsSidebar();
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.workspaceId = params.get('workspace-id');
      this.boardId = params.get('board-id');
      this.getBoard();
    });
  }

  setSettingsSidebar(value: boolean) {
    this.boardService.setSettingsSidebar(value);
  }

  getBoard() {
    this.appService.getWorkspace(this.workspaceId).subscribe({
      next: (res) => this.workspace = res
    });
    this.appService.setBoard(this.workspaceId, this.boardId);
    this.appService.getBoard().subscribe({
      next: (res) => {
        if (res) {
          this.board = res
          this.titleService.setTitle(`${this.board.title} | Trello`);
        }
      }
    });
    this.appService.checkRecentBoards(this.workspaceId, this.boardId);
  }

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

}
