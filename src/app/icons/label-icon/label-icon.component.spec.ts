import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelIconComponent } from './label-icon.component';

describe('LabelIconComponent', () => {
  let component: LabelIconComponent;
  let fixture: ComponentFixture<LabelIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabelIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LabelIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
