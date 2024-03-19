import { CdkMenuTrigger, CdkMenu, CdkMenuItem } from '@angular/cdk/menu';
import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TrelloIconComponent } from "../../../icons/trello-icon/trello-icon.component";
import { UsersIconComponent } from "../../../icons/users-icon/users-icon.component";
import { AppService } from '../../../services/app.service';

@Component({
    selector: 'app-create-dropdown',
    standalone: true,
    templateUrl: './create-dropdown.component.html',
    styleUrl: './create-dropdown.component.css',
    imports: [
        CommonModule,
        RouterModule,
        CdkMenuTrigger,
        CdkMenu,
        CdkMenuItem,
        TrelloIconComponent,
        UsersIconComponent,
    ]
})
export class CreateDropdownComponent {

  @Input({required: true}) boardPage!: boolean;
  @Input({ required: true }) board!: boolean;

  appService = inject(AppService);

  showCreateBoardModal() {
    this.appService.setCreateBoardWorkspace();
  }

}
