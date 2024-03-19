import { Component, Input, inject } from '@angular/core';
import { AppService } from '../../services/app.service';
import { BoardsCardsGridComponent } from "../../components/boards-cards-grid/boards-cards-grid.component";
import { UserIconComponent } from "../../icons/user-icon/user-icon.component";
import { WorkspaceIconComponent } from "../../components/workspace-icon/workspace-icon.component";
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
    selector: 'app-workspace',
    standalone: true,
    templateUrl: './workspace.component.html',
    styleUrl: './workspace.component.css',
    host: { 'class': 'flex flex-grow' },
    imports: [
        BoardsCardsGridComponent,
        UserIconComponent,
        WorkspaceIconComponent
    ]
})
export default class WorkspaceComponent {

  appService = inject(AppService);
  titleService = inject(Title);
  router = inject(Router);
  workspace: any;
  
  @Input()
  set id(heroId: string) {
    this.appService.getWorkspace(heroId).subscribe({
      next: (res) => {
        if (res) {
          this.workspace = res;
          this.titleService.setTitle(`${this.workspace.title} | Trello`);
        } else {
          this.router.navigate(['']);
        }
      }
    });
  }

}