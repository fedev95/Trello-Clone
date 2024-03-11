import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardSettingsComponent } from './board-settings.component';

describe('BoardSettingsComponent', () => {
  let component: BoardSettingsComponent;
  let fixture: ComponentFixture<BoardSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoardSettingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoardSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
