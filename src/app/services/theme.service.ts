import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  savedTheme: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>(undefined);

  getSavedTheme() {
    const savedTheme = localStorage.getItem('data-theme');

    if (savedTheme == 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
      this.savedTheme.next(savedTheme);
    } else if (savedTheme == 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      this.savedTheme.next(savedTheme);
    } else {
      document.documentElement.removeAttribute('data-theme');
      this.savedTheme.next(undefined);
    }
  }

  setTheme(value?: any) {
    if (value) {
      localStorage.setItem('data-theme', value);
    } else {
      localStorage.removeItem('data-theme');
    }
    this.getSavedTheme();
  }
  
  getSavedThemeObservable() {
    return this.savedTheme.asObservable();
  }

}
