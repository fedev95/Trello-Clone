import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-icon',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './user-icon.component.html',
  styleUrl: './user-icon.component.css'
})
export class UserIconComponent {

  @Input() dimensions: string = 'size-2';

}
