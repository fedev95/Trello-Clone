import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { ThemeService } from './services/theme.service';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    imports: [CommonModule, RouterOutlet, NavBarComponent]
})
export class AppComponent implements OnInit {

  themeService = inject(ThemeService);

  ngOnInit(): void {
    this.themeService.getSavedTheme();
  }

}
