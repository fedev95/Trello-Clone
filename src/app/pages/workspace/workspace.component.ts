import { Component, Input, inject } from '@angular/core';
import { AppService } from '../../services/app.service';
import { FirstLetterPipe } from "../../pipes/first-letter.pipe";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BoardsCardsGridComponent } from "../../components/boards-cards-grid/boards-cards-grid.component";
import { UserIconComponent } from "../../icons/user-icon/user-icon.component";
import { WorkspaceIconComponent } from "../../components/workspace-icon/workspace-icon.component";

@Component({
    selector: 'app-workspace',
    standalone: true,
    templateUrl: './workspace.component.html',
    styleUrl: './workspace.component.css',
    host: { 'class': 'flex flex-grow' },
    imports: [
        CommonModule,
        FirstLetterPipe,
        RouterModule,
        BoardsCardsGridComponent,
        UserIconComponent,
        WorkspaceIconComponent
    ]
})
export default class WorkspaceComponent {

  appService = inject(AppService);
  paramId: any;
  workspace: any;
  
  @Input()
  set id(heroId: string) {
    this.paramId = heroId;
    this.appService.dataObservable.subscribe({
      next: (res) => {
        this.workspace = res.workspaces.find((workspace: any) => workspace.id == this.paramId);
      }
    });
  }  

}
