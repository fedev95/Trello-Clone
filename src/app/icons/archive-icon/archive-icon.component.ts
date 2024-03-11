import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-archive-icon',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './archive-icon.component.html',
  styleUrl: './archive-icon.component.css'
})
export class ArchiveIconComponent {

  @Input() dimensions: string = 'size-2';

}
