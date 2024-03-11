import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDotsIconComponent } from './menu-dots-icon.component';

describe('MenuDotsIconComponent', () => {
  let component: MenuDotsIconComponent;
  let fixture: ComponentFixture<MenuDotsIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuDotsIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuDotsIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
