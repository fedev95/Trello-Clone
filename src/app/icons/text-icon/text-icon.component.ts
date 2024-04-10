import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-icon',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './text-icon.component.html',
  styleUrl: './text-icon.component.css'
})
export class TextIconComponent {

  @Input() dimensions: string = 'size-2';

}
