import { Component, ElementRef, HostListener, Input, ViewChild, inject } from '@angular/core';
import { AppService } from '../../services/app.service';
import { Router } from '@angular/router';
import { XmarkIconComponent } from "../../icons/xmark-icon/xmark-icon.component";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';


@Component({
    selector: 'app-delete-workspace',
    standalone: true,
    templateUrl: './delete-workspace.component.html',
    styleUrl: './delete-workspace.component.css',
    imports: [
        XmarkIconComponent,
        ReactiveFormsModule,
        FormsModule,
        OverlayModule
    ]
})
export class DeleteWorkspaceComponent {

  @Input({required : true}) workspace: any;
  appService = inject(AppService);
  router = inject(Router);
  isOpen = false;

  @ViewChild('deletePopover') menux!: ElementRef;
  @HostListener('document:click', ['$event'])
  onClick(event: Event) {
    if (this.isOpen && !this.menux.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }

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
