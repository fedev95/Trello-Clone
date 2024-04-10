import { Component, Input, OnInit, inject } from '@angular/core';
import { AppService } from '../../services/app.service';
import { CommonModule } from '@angular/common';
import { XmarkIconComponent } from "../../icons/xmark-icon/xmark-icon.component";
import { TaskIconComponent } from "../../icons/task-icon/task-icon.component";
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextIconComponent } from "../../icons/text-icon/text-icon.component";
import { TrashIconComponent } from "../../icons/trash-icon/trash-icon.component";
import { BoardService } from '../../services/board.service';

@Component({
    selector: 'app-task-modal',
    standalone: true,
    templateUrl: './task-modal.component.html',
    styleUrl: './task-modal.component.css',
    imports: [
        CommonModule,
        XmarkIconComponent,
        TaskIconComponent,
        FormsModule,
        ReactiveFormsModule,
        TextIconComponent,
        TrashIconComponent
    ]
})
export class TaskModalComponent implements OnInit {

  @Input({required: true}) taskList: any;
  @Input({ required: true }) taskIndex: any;
  task: any;
  appService = inject(AppService);
  boardService = inject(BoardService);

  updateTaskForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]),
    description: new FormControl('', Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/))
  });

  ngOnInit(): void {
    this.appService.getOpenedTask().subscribe({
      next: (res) => {
        this.task = res;
        if (res) { 
          this.updateTaskForm.patchValue({
            title: this.task.title,
            description: this.task.description
          });
        }
      }
    });
  }

  updateTask() {
    let newTitle = this.updateTaskForm.getRawValue().title;
    if (newTitle) {
      let isValid = newTitle.trim().length > 0;
      if (isValid) {
        this.task.title = newTitle;
      } else {
        this.updateTaskForm.patchValue({
          title: this.task.title
        });
      }
    } else {
      this.updateTaskForm.patchValue({
        title: this.task.title
      });
    }
    if (this.updateTaskForm.get('description')?.valid) {
      this.task.description = this.updateTaskForm.getRawValue().description;
    }
  }

  deleteTask() {
    this.appService.deleteTask(this.taskList, this.taskIndex);
  }

  closeModal() {
    let modal = document.getElementById('task-modal');
    // @ts-ignore
    modal?.close();
  }

  setScroll() {
    this.boardService.setScroll(false);
  }

}
