import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import data from './../../assets/data/data.json';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  
  data: BehaviorSubject<any> = new BehaviorSubject<any>(data);
  selectedBoard: BehaviorSubject<any> = new BehaviorSubject(undefined);
  createBoardWorkspace: BehaviorSubject<any> = new BehaviorSubject(data.workspaces[0].id);

  getData() {
    return this.data.asObservable();
  }

  getWorkspace(id: string) {
    let workspace: BehaviorSubject<any> = new BehaviorSubject(data.workspaces.find((workspace: any) => workspace.id == id));
    return workspace.asObservable();
  }

  setBoard(workspaceId: string, boardId: string) {
    const workspace = data.workspaces.find((workspace: any) => workspace.id == workspaceId);
    if (workspace) {
      const board = workspace.boards.find((board: any) => board.id == boardId);
      this.selectedBoard.next(board);
    }
  }

  getBoard() {
    return this.selectedBoard.asObservable();
  }

  getBoardById(workspaceId: number, boardId: number) {
    let boardSubject: BehaviorSubject<any> = new BehaviorSubject(undefined);
    const workspace = data.workspaces.find((workspace: any) => workspace.id == workspaceId);
    if (workspace) {
      const board = workspace.boards.find((board: any) => board.id == boardId);
      if (board) {
        boardSubject.next(board);
      }
    }
    return boardSubject.asObservable();
  }

  createNewWorkspace(newWorkspace: any) {
    data.workspaces.push(newWorkspace);
  }

  setCreateBoardWorkspace(workspaceId?: number) {
    if (workspaceId) {
      this.createBoardWorkspace.next(workspaceId);
    } else {
      this.createBoardWorkspace.next(data.workspaces[0].id);
    }
  }
  
  getCreateBoardWorkspace() {
    return this.createBoardWorkspace.asObservable();
  }

  createNewBoard(workspaceId: number, newBoard: any) {
    let workspace = data.workspaces.find((workspace: any) => workspace.id == workspaceId);
    workspace?.boards.push(newBoard);
  }

  createList(workspaceId: number, boardId: number, list: any) {
    let workspace = data.workspaces.find((workspace: any) => workspace.id == workspaceId);
    if (workspace) {
      let board = workspace!.boards.find((board: any) => board.id == boardId);
      if (board) {
        board.lists.push(list);
      }
    }
  }

  checkRecentBoards(workspaceId: number, boardId: number) {
    let recentBoard: any = data.recent.find((board: any) => board.workspaceId == workspaceId && board.boardId == boardId);
    let index = data.recent.indexOf(recentBoard);

    let board: any;
    this.getBoardById(workspaceId, boardId).subscribe({
      next: (res) => board = res
    });

    let actBoard = {
      workspaceId: workspaceId,
      boardId: boardId
    }

    if (board) {
      if (index !== -1) {
        data.recent.unshift(data.recent.splice(index, 1)[0]);
      } else {
        data.recent.unshift(actBoard);
        if (data.recent.length > 4) {
          data.recent.pop();
        }
      }
    }
  }

  deleteWorkspace(workspaceId: number) {
    const index = data.workspaces.findIndex((item: any) => item.id == workspaceId);
    if (index !== -1) {
      data.workspaces.splice(index, 1);
    }

    let filteredRecents = data.recent.filter((item: any) => item.workspaceId != workspaceId);
    data.recent = filteredRecents;
  }

  editWorkspaceInfo(title: string, description: string, workspaceId: number) {
    let workspace = data.workspaces.find((workspace: any) => workspace.id == workspaceId);
    if (workspace) {
      workspace.title = title;
      workspace.description = description
    }
  }

  editBoardTitle(workspaceId: number, boardId: number, boardTitle: string) {
    const workspace = data.workspaces.find((workspace: any) => workspace.id == workspaceId);
    if (workspace) {
      let board = workspace.boards.find((board: any) => board.id == boardId);
      if (board) {
        board.title = boardTitle;
      }
    }
  }

}
