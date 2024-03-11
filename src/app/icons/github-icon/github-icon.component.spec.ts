import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubIconComponent } from './github-icon.component';

describe('GithubIconComponent', () => {
  let component: GithubIconComponent;
  let fixture: ComponentFixture<GithubIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GithubIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GithubIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
