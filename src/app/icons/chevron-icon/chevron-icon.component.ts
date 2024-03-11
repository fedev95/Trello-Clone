import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chevron-icon',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './chevron-icon.component.html',
  styleUrl: './chevron-icon.component.css'
})
export class ChevronIconComponent {

  @Input() dimensions: string = 'size-2';

}
