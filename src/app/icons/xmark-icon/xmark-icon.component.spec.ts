import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XmarkIconComponent } from './xmark-icon.component';

describe('XmarkIconComponent', () => {
  let component: XmarkIconComponent;
  let fixture: ComponentFixture<XmarkIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XmarkIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(XmarkIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
