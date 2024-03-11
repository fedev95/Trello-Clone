import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavRecentDropdownComponent } from './recent-dropdown.component';

describe('NavRecentDropdownComponent', () => {
  let component: NavRecentDropdownComponent;
  let fixture: ComponentFixture<NavRecentDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavRecentDropdownComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavRecentDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
