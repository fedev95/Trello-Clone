import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkspacesDropdownComponent } from './workspaces-dropdown.component';

describe('WorkspacesDropdownComponent', () => {
  let component: WorkspacesDropdownComponent;
  let fixture: ComponentFixture<WorkspacesDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkspacesDropdownComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkspacesDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
