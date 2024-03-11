import { Component, inject } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FirstLetterPipe } from "../../pipes/first-letter.pipe";
import { WorkspacesDropdownComponent } from "./workspaces-dropdown/workspaces-dropdown.component";
import { RecentDropdownComponent } from "./recent-dropdown/recent-dropdown.component";
import { CreateDropdownComponent } from "./create-dropdown/create-dropdown.component";
import { GithubIconComponent } from "../../icons/github-icon/github-icon.component";
import { ThemeDropdownComponent } from "./theme-dropdown/theme-dropdown.component";
import { AppService } from '../../services/app.service';

@Component({
    selector: 'app-nav-bar',
    standalone: true,
    templateUrl: './nav-bar.component.html',
    styleUrl: './nav-bar.component.css',
    imports: [
        CommonModule,
        RouterLink,
        FirstLetterPipe,
        WorkspacesDropdownComponent,
        RecentDropdownComponent,
        CreateDropdownComponent,
        GithubIconComponent,
        ThemeDropdownComponent
    ]
})
export class NavBarComponent {

  router = inject(Router);
  appService = inject(AppService);

  boardPage: boolean = false;

  board: any;

  ngOnInit() {
    this.appService.getBoard().subscribe({
      next: (res) => this.board = res
    })
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const currentRoute = this.router.url.split('?')[0].split('/').filter(segment => segment !== '');
        if (currentRoute[0] == 'board') {
          this.boardPage = true;
        } else {
          this.boardPage = false;
        }
      }
    });
  }

}
