import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinusIconComponent } from './minus-icon.component';

describe('MinusIconComponent', () => {
  let component: MinusIconComponent;
  let fixture: ComponentFixture<MinusIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinusIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MinusIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
