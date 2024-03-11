import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeDropdownComponent } from './theme-dropdown.component';

describe('ThemeDropdownComponent', () => {
  let component: ThemeDropdownComponent;
  let fixture: ComponentFixture<ThemeDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeDropdownComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThemeDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
