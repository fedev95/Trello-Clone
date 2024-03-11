import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeLightComponent } from './theme-light.component';

describe('ThemeLightComponent', () => {
  let component: ThemeLightComponent;
  let fixture: ComponentFixture<ThemeLightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeLightComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThemeLightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
