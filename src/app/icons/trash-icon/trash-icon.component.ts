import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-trash-icon',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './trash-icon.component.html',
  styleUrl: './trash-icon.component.css'
})
export class TrashIconComponent {

  @Input() dimensions: string = 'size-2';

}
