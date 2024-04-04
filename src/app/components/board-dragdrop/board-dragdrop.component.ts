import { Component, Input, inject } from '@angular/core';
import { TaskCardListComponent } from "../task-card-list/task-card-list.component";
import { TaskCardComponent } from "../task-card/task-card.component";
import { CdkDrag, CdkDragDrop, CdkDragHandle, CdkDragPlaceholder, CdkDragPreview, CdkDropList, CdkDropListGroup } from '@angular/cdk/drag-drop';

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
  isList: boolean = false;
  isTask: boolean = false;

  falopa() {
    console.log('hermoso')
  }


}
