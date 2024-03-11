import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FirstLetterPipe } from "../../pipes/first-letter.pipe";
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { MenuDotsIconComponent } from "../../icons/menu-dots/menu-dots-icon.component";
import { ChevronIconComponent } from "../../icons/chevron-icon/chevron-icon.component";
import { WorkspaceIconComponent } from "../workspace-icon/workspace-icon.component";

@Component({
    selector: 'app-board-sidebar',
    standalone: true,
    templateUrl: './board-sidebar.component.html',
    styleUrl: './board-sidebar.component.css',
    imports: [
        CommonModule,
        RouterModule,
        FirstLetterPipe,
        MenuDotsIconComponent,
        ChevronIconComponent,
        WorkspaceIconComponent
    ]
})
export class BoardSidebarComponent {

  sidebar: boolean = true;

  @Input({required: true}) workspace: any;
  @Input({ required: true }) bgBase: any;

  constructor(private router: Router) { }

  bol: boolean = false;


  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const currentRoute = this.router.url.split('?')[0].split('/').filter(segment => segment !== '');
        if (currentRoute[0] == 'board') {
          this.bol = true;
        } else {
          this.bol = false;
        }
      }
    });
  }

}
