import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pencil-icon',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './pencil-icon.component.html',
  styleUrl: './pencil-icon.component.css'
})
export class PencilIconComponent {

  @Input() dimensions: string = 'size-2';

}
