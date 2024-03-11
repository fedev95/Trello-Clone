import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkspaceIconComponent } from './workspace-icon.component';

describe('WorkspaceIconComponent', () => {
  let component: WorkspaceIconComponent;
  let fixture: ComponentFixture<WorkspaceIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkspaceIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkspaceIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
