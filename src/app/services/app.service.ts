import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  dataJSON = {
    recent: [
      {
        workspaceId: 1,
        boardId: 1
      },
      {
        workspaceId: 2,
        boardId: 4
      },
      {
        workspaceId: 2,
        boardId: 7
      },
      {
        workspaceId: 3,
        boardId: 10
      }
    ],
    workspaces: [
      {
        'id': 1,
        'title': 'Lorem ipsum dolor sit amet consectetur',
        'iconBg': 'workspace-bg-1',
        'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse natus vel aut at! Voluptatem inventore ab facere totam enim! Optio vitae architecto aliquam magni dolorem expedita inventore nostrum. Harum quod assumenda eos. Placeat, qui asperiores blanditiis itaque eaque dignissimos praesentium ea perspiciatis ipsam sunt! Dolorum, eveniet. Sequi perspiciatis iure officiis?',
        'boards': [
          {
            'id': 1,
            'base': 'board-bg-base-5',
            'background': 'board-bg-5',
            'title': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse natus vel aut at!',
            'labels': [
              {
                'color': '#349A6F',
                'title': 'Lorem ipsum dolor sit'
              }
            ],
            'archived': {
              'lists': [],
              'cards': []
            },
            'lists': [
              {
                'title': 'Lorem ipsum dolor sit',
                'cards': [
                  {
                    'title': 'Lorem ipsum dolor',
                    'description': 'Lorem ipsum dolor sit',
                    'labels': [],
                  },
                  {
                    'title': 'Lorem ipsum dolor',
                    'description': 'Lorem ipsum dolor sit',
                    'labels': [],
                  },
                  {
                    'title': 'Lorem ipsum dolor',
                    'description': 'Lorem ipsum dolor sit',
                    'labels': [],
                  },
                  {
                    'title': 'Lorem ipsum dolor',
                    'description': 'Lorem ipsum dolor sit',
                    'labels': [],
                  },
                  {
                    'title': 'Lorem ipsum dolor',
                    'description': 'Lorem ipsum dolor sit',
                    'labels': [],
                  },
                  {
                    'title': 'Lorem ipsum dolor',
                    'description': 'Lorem ipsum dolor sit',
                    'labels': [],
                  },
                  {
                    'title': 'Lorem ipsum dolor',
                    'description': 'Lorem ipsum dolor sit',
                    'labels': [],
                  },
                  {
                    'title': 'Lorem ipsum dolor',
                    'description': 'Lorem ipsum dolor sit',
                    'labels': [],
                  },
                  {
                    'title': 'Lorem ipsum dolor',
                    'description': 'Lorem ipsum dolor sit',
                    'labels': [],
                  },
                  {
                    'title': 'Lorem ipsum dolor',
                    'description': 'Lorem ipsum dolor sit',
                    'labels': [],
                  },
                  {
                    'title': 'Lorem ipsum dolor',
                    'description': 'Lorem ipsum dolor sit',
                    'labels': [],
                  },
                  {
                    'title': 'Lorem ipsum dolor',
                    'description': 'Lorem ipsum dolor sit',
                    'labels': [],
                  },
                  {
                    'title': 'Lorem ipsum dolor',
                    'description': 'Lorem ipsum dolor sit',
                    'labels': [],
                  },
                  {
                    'title': 'Lorem ipsum dolor',
                    'description': 'Lorem ipsum dolor sit',
                    'labels': [],
                  }
                ]
              },
              {
                'title': 'Lorem ipsum dolor sit',
                'cards': [
                  {
                    'title': 'Lorem ipsum dolor',
                    'description': 'Lorem ipsum dolor sit',
                    'labels': [],
                  },
                  {
                    'title': 'Lorem ipsum dolor',
                    'description': 'Lorem ipsum dolor sit',
                    'labels': [],
                  },
                  {
                    'title': 'Lorem ipsum dolor',
                    'description': 'Lorem ipsum dolor sit',
                    'labels': [],
                  },
                  {
                    'title': 'Lorem ipsum dolor',
                    'description': 'Lorem ipsum dolor sit',
                    'labels': [],
                  }
                ]
              },
              {
                'title': 'Lorem ipsum dolor sit',
                'cards': [
                  {
                    'title': 'Lorem ipsum dolor',
                    'description': 'Lorem ipsum dolor sit',
                    'labels': [],
                  },
                  {
                    'title': 'Lorem ipsum dolor',
                    'description': 'Lorem ipsum dolor sit',
                    'labels': [],
                  },
                  {
                    'title': 'Lorem ipsum dolor',
                    'description': 'Lorem ipsum dolor sit',
                    'labels': [],
                  },
                  {
                    'title': 'Lorem ipsum dolor',
                    'description': 'Lorem ipsum dolor sit',
                    'labels': [],
                  },
                  {
                    'title': 'Lorem ipsum dolor',
                    'description': 'Lorem ipsum dolor sit',
                    'labels': [],
                  },
                  {
                    'title': 'Lorem ipsum dolor',
                    'description': 'Lorem ipsum dolor sit',
                    'labels': [],
                  }
                ]
              },
              {
                'title': 'Lorem ipsum dolor sit',
                'cards': [
                  {
                    'title': 'Lorem ipsum dolor',
                    'description': 'Lorem ipsum dolor sit',
                    'labels': [],
                  },
                  {
                    'title': 'Lorem ipsum dolor',
                    'description': 'Lorem ipsum dolor sit',
                    'labels': [],
                  },
                  {
                    'title': 'Lorem ipsum dolor',
                    'description': 'Lorem ipsum dolor sit',
                    'labels': [],
                  }
                ]
              },
            ]
          },
          {
            'id': 2,
            'base': 'board-bg-base-3',
            'background': 'board-bg-3',
            'title': 'Lorem ipsum dolor sit amet.',
            'labels': [
              {
                'color': '#349A6F',
                'title': 'Lorem ipsum dolor'
              }
            ],
            'archived': {
              'lists': [],
              'cards': []
            },
            'lists': []
          }
        ]
      },
      {
        'id': 2,
        'title': 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        'iconBg': 'workspace-bg-2',
        'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse natus vel aut at! Voluptatem inventore ab facere totam enim! Optio vitae architecto aliquam magni dolorem expedita inventore nostrum. Harum quod assumenda eos. Placeat, qui asperiores blanditiis itaque eaque dignissimos praesentium ea perspiciatis ipsam sunt! Dolorum, eveniet. Sequi perspiciatis iure officiis?',
        'boards': [
          {
            'id': 3,
            'base': 'board-bg-base-5',
            'background': 'board-bg-5',
            'title': 'Lorem ipsum dolor sit',
            'labels': [
              {
                'color': '#349A6F',
                'title': 'Lorem ipsum dolor sit'
              }
            ],
            'archived': {
              'lists': [],
              'cards': []
            },
            'lists': [
              {
                'title': 'Lorem ipsum dolor sit amet',
                'cards': [
                  {
                    'title': 'Lorem ipsum dolor',
                    'description': 'Lorem ipsum dolor sit amet consectetur',
                    'labels': [],
                  },
                  {
                    'title': 'Lorem ipsum dolor',
                    'description': 'Lorem ipsum dolor sit amet consectetur',
                    'labels': [],
                  }
                ]
              }
            ]
          },
          {
            'id': 4,
            'base': 'board-bg-base-4',
            'background': 'board-bg-4',
            'title': 'Lorem ipsum dolor sit amet consectetur',
            'labels': [
              {
                'color': '#349A6F',
                'title': 'Lorem ipsum dolor sit amet'
              }
            ],
            'archived': {
              'lists': [],
              'cards': []
            },
            'lists': [
              {
                'title': 'Lorem ipsum dolor sit amet',
                'cards': [
                  {
                    'title': 'Lorem ipsum dolor',
                    'description': 'Lorem ipsum dolor sit amet consectetur',
                    'labels': [],
                  },
                  {
                    'title': 'Lorem ipsum dolor',
                    'description': 'Lorem ipsum dolor sit amet consectetur',
                    'labels': [],
                  }
                ]
              }
            ]
          },
          {
            'id': 5,
            'base': 'board-bg-base-6',
            'background': 'board-bg-6',
            'title': 'Lorem ipsum dolor sit amet',
            'labels': [
              {
                'color': '#349A6F',
                'title': 'Lorem ipsum dolor sit amet'
              }
            ],
            'archived': {
              'lists': [],
              'cards': []
            },
            'lists': [
              {
                'title': 'Lorem ipsum dolor sit amet consectetur',
                'cards': [
                  {
                    'title': 'Lorem ipsum dolor sit',
                    'description': 'Lorem ipsum dolor sit amet consectetur',
                    'labels': [],
                  },
                  {
                    'title': 'Lorem ipsum dolor sit',
                    'description': 'Lorem ipsum dolor sit amet consectetur',
                    'labels': [],
                  }
                ]
              }
            ]
          },
          {
            'id': 6,
            'base': 'board-bg-base-1',
            'background': 'board-bg-1',
            'title': 'Lorem ipsum dolor sit amet consectetur',
            'labels': [
              {
                'color': '#349A6F',
                'title': 'Lorem ipsum dolor sit amet'
              }
            ],
            'archived': {
              'lists': [],
              'cards': []
            },
            'lists': [
              {
                'title': 'Lorem ipsum dolor sit amet consectetur',
                'cards': [
                  {
                    'title': 'Lorem ipsum dolor sit amet',
                    'description': 'Lorem ipsum dolor sit amet consectetur',
                    'labels': [],
                  },
                  {
                    'title': 'Lorem ipsum dolor sit amet',
                    'description': 'Lorem ipsum dolor sit amet consectetur',
                    'labels': [],
                  }
                ]
              }
            ]
          },
          {
            'id': 7,
            'base': 'board-bg-base-7',
            'background': 'board-bg-7',
            'title': 'Lorem ipsum dolor sit amet consectetur',
            'labels': [
              {
                'color': '#349A6F',
                'title': 'Lorem ipsum dolor'
              }
            ],
            'archived': {
              'lists': [],
              'cards': []
            },
            'lists': [
              {
                'title': 'Lorem ipsum dolor sit amet consectetur',
                'cards': [
                  {
                    'title': 'Lorem ipsum dolor sit amet',
                    'description': 'Lorem ipsum dolor sit amet consectetur',
                    'labels': [],
                  },
                  {
                    'title': 'Lorem ipsum dolor sit amet',
                    'description': 'Lorem ipsum dolor sit amet consectetur',
                    'labels': [],
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        'id': 3,
        'title': 'Lorem ipsum dolor sit',
        'iconBg': 'workspace-bg-3',
        'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse natus vel aut at! Voluptatem inventore ab facere totam enim! Optio vitae architecto aliquam magni dolorem expedita inventore nostrum. Harum quod assumenda eos. Placeat, qui asperiores blanditiis itaque eaque dignissimos praesentium ea perspiciatis ipsam sunt! Dolorum, eveniet. Sequi perspiciatis iure officiis?',
        'boards': [
          {
            'id': 8,
            'base': 'board-bg-base-8',
            'background': 'board-bg-8',
            'title': 'Lorem ipsum dolor sit amet',
            'labels': [
              {
                'color': '#349A6F',
                'title': 'Lorem ipsum dolor'
              }
            ],
            'archived': {
              'lists': [],
              'cards': []
            },
            'lists': [
              {
                'title': 'Lorem ipsum dolor sit',
                'cards': [
                  {
                    'title': 'Lorem ipsum dolor sit amet',
                    'description': 'Lorem ipsum dolor sit amet consectetur',
                    'labels': [],
                  },
                  {
                    'title': 'Lorem ipsum dolor sit amet',
                    'description': 'Lorem ipsum dolor sit amet consectetur',
                    'labels': [],
                  }
                ]
              }
            ]
          },
          {
            'id': 9,
            'base': 'board-bg-base-9',
            'background': 'board-bg-9',
            'title': 'Lorem ipsum dolor',
            'labels': [
              {
                'color': '#349A6F',
                'title': 'Lorem ipsum dolor sit'
              }
            ],
            'archived': {
              'lists': [],
              'cards': []
            },
            'lists': [
              {
                'title': 'Lorem ipsum dolor sit amet',
                'cards': [
                  {
                    'title': 'Lorem ipsum dolor sit amet',
                    'description': 'Lorem ipsum dolor sit amet consectetur',
                    'labels': [],
                  },
                  {
                    'title': 'Lorem ipsum dolor sit amet',
                    'description': 'Lorem ipsum dolor sit amet consectetur',
                    'labels': [],
                  }
                ]
              }
            ]
          },
          {
            'id': 10,
            'base': 'board-bg-base-1',
            'background': 'board-bg-2',
            'title': 'Lorem ipsum',
            'labels': [
              {
                'color': '#349A6F',
                'title': 'Lorem'
              }
            ],
            'archived': {
              'lists': [],
              'cards': []
            },
            'lists': [
              {
                'title': 'Lorem ipsum dolor sit amet',
                'cards': [
                  {
                    'title': 'Lorem ipsum dolor sit amet',
                    'description': 'Lorem ipsum dolor sit amet consectetur',
                    'labels': [],
                  },
                  {
                    'title': 'Lorem ipsum dolor sit amet',
                    'description': 'Lorem ipsum dolor sit amet consectetur',
                    'labels': [],
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        'id': 4,
        'title': 'Lorem ipsum dolor sit amet consectetur',
        'iconBg': 'workspace-bg-4',
        'description': 'Lorem ipsum dolor sit amet consectetur',
        'boards': []
      }
    ]
  };


  data: BehaviorSubject<any> = new BehaviorSubject(this.dataJSON);
  public dataObservable = this.data.asObservable();

  selectedWorkspace: BehaviorSubject<any> = new BehaviorSubject(undefined);
  selectedBoard: BehaviorSubject<any> = new BehaviorSubject(undefined);

  setSelectedWorkspace(workspaceId: string) {
    const workspace = this.dataJSON.workspaces.find((workspace: any) => workspace.id == workspaceId);
    this.selectedWorkspace.next(workspace);
  }

  setSelectedBoard(workspaceId: string, boardId: string) {
    const workspace = this.dataJSON.workspaces.find((workspace: any) => workspace.id == workspaceId);
    this.selectedWorkspace.next(workspace);
    const board = workspace!.boards.find((board: any) => board.id == boardId);
    this.selectedBoard.next(board);
  }

  getWorkspace() {
    return this.selectedWorkspace.asObservable();
  }

  getBoard() {
    return this.selectedBoard.asObservable();
  }

}
