import { CdkMenuTrigger, CdkMenu, CdkMenuItem } from '@angular/cdk/menu';
import { Component, Input, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppService } from '../../../services/app.service';
import { ChevronIconComponent } from "../../../icons/chevron-icon/chevron-icon.component";
import { WorkspaceDataPipe } from "../../../pipes/workspace-data.pipe";
import { BoardDataPipe } from "../../../pipes/board-data.pipe";

@Component({
    selector: 'app-recent-dropdown',
    standalone: true,
    templateUrl: './recent-dropdown.component.html',
    styleUrl: './recent-dropdown.component.css',
    imports: [
        RouterModule,
        CdkMenuTrigger,
        CdkMenu,
        CdkMenuItem,
        ChevronIconComponent,
        WorkspaceDataPipe,
        BoardDataPipe
    ]
})
export class RecentDropdownComponent implements OnInit {

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
