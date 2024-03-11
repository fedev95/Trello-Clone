import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PencilIconComponent } from './pencil-icon.component';

describe('PencilIconComponent', () => {
  let component: PencilIconComponent;
  let fixture: ComponentFixture<PencilIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PencilIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PencilIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
