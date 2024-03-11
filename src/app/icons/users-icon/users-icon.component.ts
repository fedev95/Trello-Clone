import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-users-icon',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './users-icon.component.html',
  styleUrl: './users-icon.component.css'
})
export class UsersIconComponent {

  @Input() dimensions: string = 'size-2';

}
