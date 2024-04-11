import { Component, Input, inject } from '@angular/core';
import { TaskCardListComponent } from "../task-card-list/task-card-list.component";
import { CdkDrag, CdkDragDrop, CdkDragHandle, CdkDragPlaceholder, CdkDragPreview, CdkDropList, CdkDropListGroup } from '@angular/cdk/drag-drop';
import { BoardService } from '../../services/board.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ListOptionsComponent } from "../list-options/list-options.component";
import { TaskModalComponent } from "../task-modal/task-modal.component";
import { PencilIconComponent } from "../../icons/pencil-icon/pencil-icon.component";
import { AppService } from '../../services/app.service';
import { CdkMenu, CdkMenuItem } from '@angular/cdk/menu';
import { TextIconComponent } from "../../icons/text-icon/text-icon.component";

@Component({
    selector: 'app-board-dragdrop',
    standalone: true,
    templateUrl: './board-dragdrop.component.html',
    styleUrl: './board-dragdrop.component.css',
    host: { 'class': 'h-full' },
    imports: [
        ReactiveFormsModule,
        FormsModule,
        TaskCardListComponent,
        CdkDrag,
        CdkDropList,
        CdkDropListGroup,
        CdkDragHandle,
        CdkDragPlaceholder,
        CdkDragPreview,
        ListOptionsComponent,
        TaskModalComponent,
        PencilIconComponent,
        CdkMenu,
        CdkMenuItem,
        TextIconComponent
    ]
})
export class BoardDragdropComponent {

  @Input({required: true}) board: any;
  appService = inject(AppService);
  boardService = inject(BoardService);
  listTitleEdit: number = -1;
  isList: boolean = false;
  isTask: boolean = false;
  task: any;
  taskList: any;
  taskIndex: any;

  updateListTitleForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]),
  });

  showTitleInput(listIndex: number, listTitle: string) {
    this.updateListTitleForm.patchValue({
      title: listTitle
    })
    this.listTitleEdit = listIndex;
    setTimeout(() => {
      let input = document.getElementById(`${listIndex}-title-input`);
      input?.focus();
      // @ts-ignore
      input?.select();
    });
  }

  submitTitle(list: any) {
    this.listTitleEdit = -1;
    let newTitle = this.updateListTitleForm.getRawValue().title;
    if (newTitle) {
      let isValid = newTitle.trim().length > 0;
      if (isValid) {
        list.title = newTitle.trim();
      }
    }    
  }

  moveTask(event: CdkDragDrop<any>) {
    const { previousContainer, container, previousIndex, currentIndex } = event;
    const isSameContainer = previousContainer == container;

    if (isSameContainer && previousIndex == currentIndex) {
      return;
    }

    isSameContainer
      ? this.boardService.reorderTask(container.data, previousIndex, currentIndex)
      : this.boardService.transferTask({ fromList: previousContainer.data, toList: container.data, fromIndex: previousIndex, toIndex: currentIndex });
  }

  moveList(event: CdkDragDrop<any>) {
    const { previousIndex, currentIndex } = event;
    if (previousIndex == currentIndex) {
      return;
    }
    this.boardService.moveList(this.board, previousIndex, currentIndex);
  }

  setOpenedTask(task: any, taskList: any, taskIndex: any) {
    this.taskList = taskList;
    this.taskIndex = taskIndex;
    this.appService.setOpenedTask(task);
    let modal = document.getElementById('task-modal');
    // @ts-ignore
    modal?.showModal();
  }

}
