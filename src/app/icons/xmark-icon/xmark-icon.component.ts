import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-xmark-icon',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './xmark-icon.component.html',
  styleUrl: './xmark-icon.component.css'
})
export class XmarkIconComponent {

  @Input() dimensions: string = 'size-2';

}
