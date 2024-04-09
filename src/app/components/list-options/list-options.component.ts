import { Component, Input } from '@angular/core';
import { MenuDotsIconComponent } from "../../icons/menu-dots/menu-dots-icon.component";
import { XmarkIconComponent } from "../../icons/xmark-icon/xmark-icon.component";
import { CdkMenu, CdkMenuItem, CdkMenuTrigger } from '@angular/cdk/menu';

@Component({
    selector: 'app-list-options',
    standalone: true,
    templateUrl: './list-options.component.html',
    styleUrl: './list-options.component.css',
    imports: [
        MenuDotsIconComponent,
        XmarkIconComponent,
        CdkMenu,
        CdkMenuItem,
        CdkMenuTrigger
    ]
})
export class ListOptionsComponent {

  @Input({ required: true }) board: any;
  @Input({ required: true }) list: any;
  @Input({ required: true }) listIndex: number = 0;

  deleteList() {
    this.board.lists.splice(this.listIndex, 1);
  }

}