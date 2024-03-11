import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrelloIconComponent } from './trello-icon.component';

describe('TrelloIconComponent', () => {
  let component: TrelloIconComponent;
  let fixture: ComponentFixture<TrelloIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrelloIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrelloIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
