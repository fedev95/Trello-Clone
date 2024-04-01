import { Component, ElementRef, HostListener, Input, ViewChild, inject } from '@angular/core';
import { XmarkIconComponent } from "../../icons/xmark-icon/xmark-icon.component";
import { PlusIconComponent } from "../../icons/plus-icon/plus-icon.component";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppService } from '../../services/app.service';

@Component({
    selector: 'app-new-list-form',
    standalone: true,
    templateUrl: './new-list-form.component.html',
    styleUrl: './new-list-form.component.css',
    imports: [
      XmarkIconComponent,
      PlusIconComponent,
      ReactiveFormsModule,
      FormsModule
    ]
})
export class NewListFormComponent {

  @Input({required: true}) board: any;
  @Input({ required: true }) workspaceId: any;
  @Input({ required: true }) boardId: any;
  appService = inject(AppService);
  builder: boolean = false;

  @ViewChild('form') menux!: ElementRef;
  @HostListener('document:click', ['$event'])
  onClick(event: Event) {
    if (this.builder && !this.menux.nativeElement.contains(event.target)) {
      this.cancel();
    }
  }

  newListForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]),
    cards: new FormControl([])
  });

  formFunc() {
    this.appService.createList(this.workspaceId, this.boardId, this.newListForm.getRawValue());
    this.newListForm.patchValue({
      title: '',
      cards: []
    });
  }

  cancel() {
    this.builder = false;
    this.newListForm.patchValue({
      title: '',
      cards: []
    });
  }

}