import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-label-icon',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './label-icon.component.html',
  styleUrl: './label-icon.component.css'
})
export class LabelIconComponent {

  @Input() dimensions: string = 'size-2';

}
