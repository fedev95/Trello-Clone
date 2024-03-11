import { Component, Input } from '@angular/core';
import { backgrounds } from '../boardBackgrounds';
import { CheckIconComponent } from "../../../icons/check-icon/check-icon.component";

@Component({
    selector: 'app-change-background',
    standalone: true,
    templateUrl: './change-background.component.html',
    styleUrl: './change-background.component.css',
    imports: [CheckIconComponent],
    host: {'class': 'overflow-hidden'}
})
export class ChangeBackgroundComponent {

  @Input({required: true}) board: any;

  boardBackgrounds = backgrounds;

}
