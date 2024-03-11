import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-plus-icon',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './plus-icon.component.html',
  styleUrl: './plus-icon.component.css'
})
export class PlusIconComponent {

  @Input() dimensions: string = 'size-2';

}
