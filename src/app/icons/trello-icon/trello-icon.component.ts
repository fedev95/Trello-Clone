import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-trello-icon',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './trello-icon.component.html',
  styleUrl: './trello-icon.component.css'
})
export class TrelloIconComponent {

  @Input() dimensions: string = 'size-2';

}
