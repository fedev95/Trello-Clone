import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-clock-icon',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './clock-icon.component.html',
  styleUrl: './clock-icon.component.css'
})
export class ClockIconComponent {

  @Input() dimensions: string = 'size-2';

}
