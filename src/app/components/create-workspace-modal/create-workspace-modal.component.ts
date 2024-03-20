import { Component, OnInit, inject } from '@angular/core';
import { XmarkIconComponent } from "../../icons/xmark-icon/xmark-icon.component";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppService } from '../../services/app.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-create-workspace-modal',
    standalone: true,
    templateUrl: './create-workspace-modal.component.html',
    styleUrl: './create-workspace-modal.component.css',
    imports: [
      XmarkIconComponent,
      FormsModule,
      ReactiveFormsModule
    ]
})
export class CreateWorkspaceModalComponent implements OnInit {

  appService = inject(AppService);
  router = inject(Router);
  data: any;
  modal: any;

  newWorkspaceForm = new FormGroup({
    id: new FormControl(0, Validators.required),
    title: new FormControl('', Validators.required),
    iconBg: new FormControl(''),
    description: new FormControl(''),
    boards: new FormControl([])
  });

  ngOnInit(): void {
    this.appService.getData().subscribe({
      next: (res) => this.data = res
    });
    this.modal = document.getElementById('create-workspace-modal');
    this.modal?.addEventListener("toggle", () => {
      this.newWorkspaceForm.patchValue({
        id: 0,
        title: '',
        iconBg: '',
        description: '',
        boards: []
      });
    });
  }

  createWorkspace() {
    let newId = this.createId();
    let iconBg = `workspace-bg-${this.generateIconBg()}`;
    this.newWorkspaceForm.patchValue({
      id: newId,
      iconBg: iconBg
    });
    this.modal?.hidePopover();
    this.appService.createNewWorkspace(this.newWorkspaceForm.getRawValue());
    this.router.navigate([`/workspace/${newId}`]);
  }

  createId() {
    const lastWorkspace = this.data.workspaces[this.data.workspaces.length - 1];
    if (lastWorkspace) {
      return lastWorkspace.id + 1;
    } else {
      return 0;
    }
  }

  generateIconBg() {
    let randomNum = Math.floor(Math.random() * 4) + 1;
    return randomNum;
  }

}
