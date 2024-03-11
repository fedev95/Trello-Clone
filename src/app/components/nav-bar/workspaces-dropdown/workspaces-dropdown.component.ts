import { CdkMenuTrigger, CdkMenu, CdkMenuItem } from '@angular/cdk/menu';
import { Component, Input, inject } from '@angular/core';
import { AppService } from '../../../services/app.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FirstLetterPipe } from "../../../pipes/first-letter.pipe";
import { ChevronIconComponent } from "../../../icons/chevron-icon/chevron-icon.component";
import { WorkspaceIconComponent } from "../../workspace-icon/workspace-icon.component";

@Component({
    selector: 'app-workspaces-dropdown',
    standalone: true,
    templateUrl: './workspaces-dropdown.component.html',
    styleUrl: './workspaces-dropdown.component.css',
    imports: [
        CommonModule,
        RouterModule,
        CdkMenuTrigger,
        CdkMenu,
        CdkMenuItem,
        FirstLetterPipe,
        ChevronIconComponent,
        WorkspaceIconComponent
    ]
})
export class WorkspacesDropdownComponent {

  @Input({required: true}) boardPage!: boolean;

  appService = inject(AppService);

  data = this.appService.dataObservable;

}
