import { CdkMenuTrigger, CdkMenu, CdkMenuItem } from '@angular/cdk/menu';
import { Component, Input, OnInit, inject } from '@angular/core';
import { ThemeService } from '../../../services/theme.service';
import { ThemeSystemComponent } from "../../../icons/theme-system/theme-system.component";
import { ThemeLightComponent } from "../../../icons/theme-light/theme-light.component";
import { ThemeDarkComponent } from "../../../icons/theme-dark/theme-dark.component";

@Component({
    selector: 'app-theme-dropdown',
    standalone: true,
    templateUrl: './theme-dropdown.component.html',
    styleUrl: './theme-dropdown.component.css',
    imports: [
        CdkMenuTrigger,
        CdkMenu,
        CdkMenuItem,
        ThemeSystemComponent,
        ThemeLightComponent,
        ThemeDarkComponent
    ]
})
export class ThemeDropdownComponent implements OnInit {

  @Input({required: true}) boardPage!: boolean;

  themeService = inject(ThemeService);
  theme: any;

  ngOnInit(): void {
    this.themeService.getSavedThemeObservable().subscribe({
      next: (res) => this.theme = res
    });
  }

  setTheme(value?: string) {
    this.themeService.setTheme(value);
  }

}
