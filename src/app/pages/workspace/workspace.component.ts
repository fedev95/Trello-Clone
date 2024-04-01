import { Component, Input, inject } from '@angular/core';
import { AppService } from '../../services/app.service';
import { BoardsCardsGridComponent } from "../../components/boards-cards-grid/boards-cards-grid.component";
import { UserIconComponent } from "../../icons/user-icon/user-icon.component";
import { WorkspaceIconComponent } from "../../components/workspace-icon/workspace-icon.component";
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { PencilIconComponent } from "../../icons/pencil-icon/pencil-icon.component";
import { TrashIconComponent } from "../../icons/trash-icon/trash-icon.component";
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
    selector: 'app-workspace',
    standalone: true,
    templateUrl: './workspace.component.html',
    styleUrl: './workspace.component.css',
    host: { 'class': 'flex flex-grow' },
    imports: [
        BoardsCardsGridComponent,
        UserIconComponent,
        WorkspaceIconComponent,
        PencilIconComponent,
        TrashIconComponent,
        ReactiveFormsModule,
        FormsModule
    ]
})
export default class WorkspaceComponent {

  appService = inject(AppService);
  titleService = inject(Title);
  router = inject(Router);
  workspace: any;
  editMode: boolean = false;
  
  @Input()
  set id(heroId: string) {
    this.appService.getWorkspace(heroId).subscribe({
      next: (res) => {
        if (res) {
          this.editMode = false;
          this.workspace = res;
          this.editWorkspaceForm.patchValue({
            title: res.title,
            description: res.description
          });
          this.titleService.setTitle(`${this.workspace.title} | Trello`);
        } else {
          this.router.navigate(['']);
        }
      }
    });
  }

  editWorkspaceForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]),
    description: new FormControl(''),
  });

  deleteWorkspace(id: number) {
    this.appService.deleteWorkspace(id);
    this.router.navigate(['/']);
  }

  showCreateBoardModal(workspaceId: number) {
    this.appService.setCreateBoardWorkspace(workspaceId);
    let modal = document.getElementById('create-board-modal');
    if (modal) {
      // @ts-ignore
      modal.showModal();
    }
  }

  editWorkspaceInfo() {
    const newTitle = this.editWorkspaceForm.getRawValue().title;
    const newDescription = this.editWorkspaceForm.getRawValue().description;
    this.appService.editWorkspaceInfo(newTitle!, newDescription!, this.workspace.id);
    this.cancelEdit();
  }

  cancelEdit() {
    this.editMode = false;
    this.editWorkspaceForm.patchValue({
      title: this.workspace.title,
      description: this.workspace.description
    });
  }

}