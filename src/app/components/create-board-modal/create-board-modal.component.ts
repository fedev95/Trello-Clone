import { Component, ElementRef, HostListener, OnInit, ViewChild, inject } from '@angular/core';
import { XmarkIconComponent } from "../../icons/xmark-icon/xmark-icon.component";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { backgrounds } from './../board-settings/boardBackgrounds';
import { CheckIconComponent } from "../../icons/check-icon/check-icon.component";
import { AppService } from '../../services/app.service';
import { WorkspaceDataPipe } from "../../pipes/workspace-data.pipe";
import { ChevronIconComponent } from "../../icons/chevron-icon/chevron-icon.component";
import { Router } from '@angular/router';

@Component({
    selector: 'app-create-board-modal',
    standalone: true,
    templateUrl: './create-board-modal.component.html',
    styleUrl: './create-board-modal.component.css',
    imports: [
        XmarkIconComponent,
        ReactiveFormsModule,
        FormsModule,
        CheckIconComponent,
        ChevronIconComponent,
        WorkspaceDataPipe
    ]
})
export class CreateBoardModalComponent implements OnInit {

  appService = inject(AppService);
  router = inject(Router);
  boardBackgrounds = backgrounds;
  data: any;
  workspacesList: boolean = false;
  createBoardWorkspace: any;
  modal: any;

  @ViewChild('workspaceList') menux!: ElementRef;
  @HostListener('document:click', ['$event'])
  onClick(event: Event) {
    if (this.workspacesList && !this.menux.nativeElement.contains(event.target)) {
      this.workspacesList = false;
    }
  }

  newBoardForm = new FormGroup({
    id: new FormControl(0, Validators.required),
    base: new FormControl('board-bg-base-1', Validators.required),
    background: new FormControl('board-bg-1', Validators.required),
    title: new FormControl('', Validators.required),
    labels: new FormControl([]),
    archived: new FormControl({lists: [], cards: []}),
    lists: new FormControl([])
  });

  ngOnInit(): void {
    this.appService.getData().subscribe({
      next: (res) => this.data = res
    });
    this.appService.getCreateBoardWorkspace().subscribe({
      next: (res) => this.createBoardWorkspace = res
    });
    this.modal = document.getElementById('create-board-modal');
    this.modal?.addEventListener("close", () => {
      this.newBoardForm.patchValue({
        id: 0,
        base: 'board-bg-base-1',
        background: 'board-bg-1',
        title: ''
      });
    });
  }

  setBackgrounds(background: any) {
    this.newBoardForm.patchValue({
      base: background.base,
      background: background.class,
    });
  }

  createBoard() {
    let newId: number = this.createId();
    this.newBoardForm.patchValue({
      id: newId,
      lists: []
    });
    this.appService.createNewBoard(this.createBoardWorkspace, this.newBoardForm.getRawValue());
    this.closeModal();
    this.router.navigate([`/board/${this.createBoardWorkspace}/${newId}`]);
  }

  createId() {
    let workspace = this.data.workspaces.find((workspace: any) => workspace.id == this.createBoardWorkspace);
    if (workspace.boards.length > 0) {
      const lastBoard = workspace.boards[workspace.boards.length - 1];
      return lastBoard.id + 1;
    } else {
      return 0;
    }
  }

  closeModal() {
    if (this.modal) {
      // @ts-ignore
      this.modal.close();
    }
  }

}
