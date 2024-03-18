import { CdkMenuTrigger, CdkMenu, CdkMenuItem } from '@angular/cdk/menu';
import { Component, Input, OnInit, inject } from '@angular/core';
import { AppService } from '../../../services/app.service';
import { RouterModule } from '@angular/router';
import { ChevronIconComponent } from "../../../icons/chevron-icon/chevron-icon.component";
import { WorkspaceIconComponent } from "../../workspace-icon/workspace-icon.component";

@Component({
    selector: 'app-workspaces-dropdown',
    standalone: true,
    templateUrl: './workspaces-dropdown.component.html',
    styleUrl: './workspaces-dropdown.component.css',
    imports: [
        RouterModule,
        CdkMenuTrigger,
        CdkMenu,
        CdkMenuItem,
        ChevronIconComponent,
        WorkspaceIconComponent
    ]
})
export class WorkspacesDropdownComponent implements OnInit {

  @Input({required: true}) boardPage!: boolean;
  @Input({ required: true }) board!: boolean;

  appService = inject(AppService);
  data: any;

  ngOnInit(): void {
    this.appService.getData().subscribe({
      next: (res) => this.data = res
    });
  }

}
