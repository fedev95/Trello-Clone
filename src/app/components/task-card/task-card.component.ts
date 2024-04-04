import { Component, Input } from '@angular/core';
import { PencilIconComponent } from "../../icons/pencil-icon/pencil-icon.component";

@Component({
    selector: 'app-task-card',
    standalone: true,
    templateUrl: './task-card.component.html',
    styleUrl: './task-card.component.css',
    imports: [PencilIconComponent]
})
export class TaskCardComponent {

  @Input({required: true}) card: any;

}
