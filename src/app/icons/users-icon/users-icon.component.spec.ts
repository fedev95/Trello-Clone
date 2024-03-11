import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersIconComponent } from './users-icon.component';

describe('UsersIconComponent', () => {
  let component: UsersIconComponent;
  let fixture: ComponentFixture<UsersIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsersIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
