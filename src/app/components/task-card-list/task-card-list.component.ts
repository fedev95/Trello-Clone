import { Component, Input } from '@angular/core';
import { TaskCardComponent } from "../task-card/task-card.component";
import { PlusIconComponent } from "../../icons/plus-icon/plus-icon.component";

@Component({
    selector: 'app-task-card-list',
    standalone: true,
    templateUrl: './task-card-list.component.html',
    styleUrl: './task-card-list.component.css',
    host: { 'class': 'flex flex-grow' },
    imports: [
        TaskCardComponent,
        PlusIconComponent
    ]
})
export class TaskCardListComponent {

  @Input({ required: true }) list: any;
  
}
