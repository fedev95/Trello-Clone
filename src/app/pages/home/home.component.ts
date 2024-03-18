import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppService } from '../../services/app.service';
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
        TrelloIconComponent,
        WorkspaceIconComponent
    ]
})
export default class HomeComponent implements OnInit {
  
  appService = inject(AppService);
  data: any;
  
  ngOnInit(): void {
    this.appService.getData().subscribe({
      next: (res) =>  this.data = res
    });
  }
  
}
