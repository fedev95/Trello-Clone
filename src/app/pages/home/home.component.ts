import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppService } from '../../services/app.service';
import { CommonModule } from '@angular/common';
import { FirstLetterPipe } from "../../pipes/first-letter.pipe";
import { TrelloIconComponent } from "../../icons/trello-icon/trello-icon.component";
import { WorkspaceIconComponent } from "../../components/workspace-icon/workspace-icon.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    host: { 'class': 'flex flex-grow flex-col overflow-auto' },
    imports: [
        RouterModule,
        CommonModule,
        FirstLetterPipe,
        TrelloIconComponent,
        WorkspaceIconComponent
    ]
})
export default class HomeComponent {

  appService = inject(AppService);
  data = this.appService.dataObservable;
  
}
