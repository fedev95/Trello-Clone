import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-github-icon',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './github-icon.component.html',
  styleUrl: './github-icon.component.css'
})
export class GithubIconComponent {

  @Input() dimensions: string = 'size-2';

}
