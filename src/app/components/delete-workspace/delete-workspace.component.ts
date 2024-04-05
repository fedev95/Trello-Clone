import { Component, Input, inject } from '@angular/core';
import { CdkMenu, CdkMenuItem, CdkMenuTrigger } from '@angular/cdk/menu';
import { AppService } from '../../services/app.service';
import { Router } from '@angular/router';
import { XmarkIconComponent } from "../../icons/xmark-icon/xmark-icon.component";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
    selector: 'app-delete-workspace',
    standalone: true,
    templateUrl: './delete-workspace.component.html',
    styleUrl: './delete-workspace.component.css',
    imports: [
        CdkMenu,
        CdkMenuItem,
        CdkMenuTrigger,
        XmarkIconComponent,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class DeleteWorkspaceComponent {

  @Input({required : true}) workspace: any;
  appService = inject(AppService);
  router = inject(Router);

  deleteWorkspace() {
    this.appService.deleteWorkspace(this.workspace.id);
    this.router.navigate(['/']);
  }

  deleteWorkspaceForm = new FormGroup({
    workspaceTitle: new FormControl('', Validators.required)
  });

  resetForm() {
    this.deleteWorkspaceForm.get('workspaceTitle')!.setValidators([Validators.required, Validators.pattern(this.workspace.title.trim())]);
    this.deleteWorkspaceForm.reset();
  }

}
