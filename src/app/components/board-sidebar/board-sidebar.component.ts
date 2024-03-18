import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FirstLetterPipe } from "../../pipes/first-letter.pipe";
import { RouterModule } from '@angular/router';
import { ChevronIconComponent } from "../../icons/chevron-icon/chevron-icon.component";
import { WorkspaceIconComponent } from "../workspace-icon/workspace-icon.component";
import { MinusIconComponent } from "../../icons/minus-icon/minus-icon.component";

@Component({
    selector: 'app-board-sidebar',
    standalone: true,
    templateUrl: './board-sidebar.component.html',
    styleUrl: './board-sidebar.component.css',
    imports: [
        CommonModule,
        RouterModule,
        FirstLetterPipe,
        ChevronIconComponent,
        WorkspaceIconComponent,
        MinusIconComponent
    ]
})
export class BoardSidebarComponent {

  sidebar: boolean = true;

  @Input({required: true}) workspace: any;
  @Input({ required: true }) bgBase: any;

}
