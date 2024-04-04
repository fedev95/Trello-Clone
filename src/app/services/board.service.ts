import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
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

  reorderTask(list: any, fromIndex: number, toIndex: number) {
    moveItemInArray(list.cards, fromIndex, toIndex);
  }

  transferTask({ fromList, toList, fromIndex, toIndex }: any) {
    transferArrayItem(fromList.cards, toList.cards, fromIndex, toIndex);
  }

  moveList(board: any, fromIndex: number, toIndex: number) {
    moveItemInArray(board.lists, fromIndex, toIndex);
  }

}
