import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeDarkComponent } from './theme-dark.component';

describe('ThemeDarkComponent', () => {
  let component: ThemeDarkComponent;
  let fixture: ComponentFixture<ThemeDarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeDarkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThemeDarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
