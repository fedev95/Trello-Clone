import { Component, Input } from '@angular/core';
import { FirstLetterPipe } from "../../pipes/first-letter.pipe";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-workspace-icon',
    standalone: true,
    templateUrl: './workspace-icon.component.html',
    styleUrl: './workspace-icon.component.css',
    imports: [
      CommonModule,
      FirstLetterPipe
    ]
})
export class WorkspaceIconComponent {

  @Input({required: true}) workspace: any;

  // size, font-seize, border-radius
  @Input() sizeClasses: string = 'size-4 text-xs';

}
