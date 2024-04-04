import { Component, Input, inject } from '@angular/core';
import { TaskCardListComponent } from "../task-card-list/task-card-list.component";
import { TaskCardComponent } from "../task-card/task-card.component";
import { CdkDrag, CdkDragDrop, CdkDragHandle, CdkDragPlaceholder, CdkDragPreview, CdkDropList, CdkDropListGroup } from '@angular/cdk/drag-drop';
import { BoardService } from '../../services/board.service';

@Component({
    selector: 'app-board-dragdrop',
    standalone: true,
    templateUrl: './board-dragdrop.component.html',
    styleUrl: './board-dragdrop.component.css',
    host: { 'class': 'h-full' },
    imports: [
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
  boardService = inject(BoardService)
  isList: boolean = false;
  isTask: boolean = false;

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
