import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-check-icon',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './check-icon.component.html',
  styleUrl: './check-icon.component.css'
})
export class CheckIconComponent {

  @Input() dimensions: string = 'size-2';

}
