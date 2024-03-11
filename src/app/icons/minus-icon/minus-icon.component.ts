import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-minus-icon',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './minus-icon.component.html',
  styleUrl: './minus-icon.component.css'
})
export class MinusIconComponent {

  @Input() dimensions: string = 'size-2';

}
