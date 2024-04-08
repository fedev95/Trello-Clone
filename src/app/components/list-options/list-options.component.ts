import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { MenuDotsIconComponent } from "../../icons/menu-dots/menu-dots-icon.component";
import { OverlayModule } from '@angular/cdk/overlay';
import { XmarkIconComponent } from "../../icons/xmark-icon/xmark-icon.component";

@Component({
    selector: 'app-list-options',
    standalone: true,
    templateUrl: './list-options.component.html',
    styleUrl: './list-options.component.css',
    imports: [
        MenuDotsIconComponent,
        OverlayModule,
        XmarkIconComponent
    ]
})
export class ListOptionsComponent {

  @Input({ required: true }) board: any;
  @Input({ required: true }) list: any;
  @Input({ required: true }) listIndex: number = 0;
  isOpen: boolean = false;

  @ViewChild('listOptions') menux!: ElementRef;
  @ViewChild('triger') trigger!: ElementRef;
  @HostListener('document:mousedown', ['$event'])
  onClick(event: Event) {
    if (this.isOpen && !this.menux.nativeElement.contains(event.target) && !this.trigger.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }

  deleteList() {
    this.board.lists.splice(this.listIndex, 1);
  }

}