import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardsCardsGridComponent } from './boards-cards-grid.component';

describe('BoardsCardsGridComponent', () => {
  let component: BoardsCardsGridComponent;
  let fixture: ComponentFixture<BoardsCardsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoardsCardsGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoardsCardsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
