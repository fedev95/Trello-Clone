import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-dots-icon',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './menu-dots-icon.component.html',
  styleUrl: './menu-dots-icon.component.css'
})
export class MenuDotsIconComponent {

  @Input() dimensions: string = 'size-2';

}
