import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  settingsSidebar: BehaviorSubject<any> = new BehaviorSubject(false);

  getSettingsSidebar() {
    return this.settingsSidebar.asObservable();
  }

  setSettingsSidebar(value: boolean) {
    this.settingsSidebar.next(value);
  }

}
