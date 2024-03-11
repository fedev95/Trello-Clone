import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveIconComponent } from './archive-icon.component';

describe('ArchiveIconComponent', () => {
  let component: ArchiveIconComponent;
  let fixture: ComponentFixture<ArchiveIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchiveIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArchiveIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
