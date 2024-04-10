import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-icon',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './task-icon.component.html',
  styleUrl: './task-icon.component.css'
})
export class TaskIconComponent {

  @Input() dimensions: string = 'size-2';

}
