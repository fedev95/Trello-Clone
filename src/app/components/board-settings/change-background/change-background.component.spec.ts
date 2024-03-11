import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeBackgroundComponent } from './change-background.component';

describe('ChangeBackgroundComponent', () => {
  let component: ChangeBackgroundComponent;
  let fixture: ComponentFixture<ChangeBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeBackgroundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChangeBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
