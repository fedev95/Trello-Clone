import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-board-preview-card',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './board-preview-card.component.html',
  styleUrl: './board-preview-card.component.css'
})
export class BoardPreviewCardComponent {

  @Input({ required: true }) workspaceId: any;
  @Input({ required: true }) board: any;

  backgroundTransition: string = '';

  setTransitions() {
    this.backgroundTransition = 'view-transition-name: board-transition';
  }

}
