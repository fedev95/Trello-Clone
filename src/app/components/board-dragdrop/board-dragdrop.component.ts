import { Component, Input, inject } from '@angular/core';
import { TaskCardListComponent } from "../task-card-list/task-card-list.component";
import { TaskCardComponent } from "../task-card/task-card.component";
import { CdkDrag, CdkDragDrop, CdkDragHandle, CdkDragPlaceholder, CdkDragPreview, CdkDropList, CdkDropListGroup } from '@angular/cdk/drag-drop';
import { BoardService } from '../../services/board.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

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
        TaskCardComponent,
        CdkDrag,
        CdkDropList,
        CdkDropListGroup,
        CdkDragHandle,
        CdkDragPlaceholder,
        CdkDragPreview
    ]
})
export class BoardDragdropComponent {

  @Input({required: true}) board: any;
  boardService = inject(BoardService);
  listTitleEdit: number = -1;
  isList: boolean = false;
  isTask: boolean = false;

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


}
