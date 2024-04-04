import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  settingsSidebar: BehaviorSubject<any> = new BehaviorSubject(false);
  ableToScroll: BehaviorSubject<any> = new BehaviorSubject(true);

  getSettingsSidebar() {
    return this.settingsSidebar.asObservable();
  }

  setSettingsSidebar(value: boolean) {
    this.settingsSidebar.next(value);
  }

  getScroll() {
    return this.ableToScroll.asObservable();
  }

  setScroll(value: boolean) {
    this.ableToScroll.next(value);
  }

}
