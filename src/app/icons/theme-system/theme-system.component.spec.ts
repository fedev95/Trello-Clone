import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeSystemComponent } from './theme-system.component';

describe('ThemeSystemComponent', () => {
  let component: ThemeSystemComponent;
  let fixture: ComponentFixture<ThemeSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeSystemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThemeSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
