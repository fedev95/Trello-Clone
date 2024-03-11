import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { XmarkIconComponent } from "../../icons/xmark-icon/xmark-icon.component";
import { PlusIconComponent } from "../../icons/plus-icon/plus-icon.component";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

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

  builder: boolean = false;

  @ViewChild('form') menux!: ElementRef;
  @HostListener('document:click', ['$event'])
  onClick(event: Event) {
    if (this.builder && !this.menux.nativeElement.contains(event.target)) {
      this.cancel();
    }
  }

  newList: any = {
    title: '',
    cards: []
  }

  newListForm = new FormGroup({
    listTitle: new FormControl(''),
  });

  formFunc() {
    
  }

  cancel() {
    this.builder = false;
    this.newListForm.patchValue({
      listTitle: ''
    })
  }

}
