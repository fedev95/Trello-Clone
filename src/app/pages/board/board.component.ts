import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { AppService } from '../../services/app.service';
import { TaskCardListComponent } from "../../components/task-card-list/task-card-list.component";
import { MenuDotsIconComponent } from "../../icons/menu-dots/menu-dots-icon.component";
import { BoardSidebarComponent } from "../../components/board-sidebar/board-sidebar.component";
import { BoardSettingsComponent } from "../../components/board-settings/board-settings.component";
import { BoardService } from '../../services/board.service';
import { NewListFormComponent } from "../../components/new-list-form/new-list-form.component";
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';

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
        NewListFormComponent,
        ReactiveFormsModule,
        FormsModule
    ]
})
export default class BoardComponent implements OnInit {

  constructor(private titleService: Title) {}

  appService = inject(AppService);
  boardService = inject(BoardService);
  route = inject(ActivatedRoute);
  workspaceId!: any;
  boardId!: any;
  workspace: any;
  board: any;
  settings: any;
  editTitle: boolean = false;

  boardTitleForm = new FormGroup({
    title: new FormControl('', [Validators.required])
  });

  ngOnInit(): void {
    this.settings = this.boardService.getSettingsSidebar();
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.workspaceId = params.get('workspace-id');
      this.boardId = params.get('board-id');
      this.getBoard();
    });
  }

  submitTitle() {
    this.editTitle = false;
    let newTitle = this.boardTitleForm.getRawValue().title;
    if (newTitle) {
      let isValid = newTitle.trim().length > 0;
      if (isValid) {
        this.appService.editBoardTitle(this.workspaceId, this.board.id, newTitle);
      } else {
        this.boardTitleForm.patchValue({
          title: this.board.title
        });
      }
    } else {
      this.boardTitleForm.patchValue({
        title: this.board.title
      });
    }
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
          this.boardTitleForm.patchValue({
            title: this.board.title
          })
        }
      }
    });
    this.appService.checkRecentBoards(parseInt(this.workspaceId), parseInt(this.boardId));
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
