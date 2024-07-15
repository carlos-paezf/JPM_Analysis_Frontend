import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateUserCircularizationComponent } from './generate-user-circularization.component';

describe('GenerateUserCircularizationComponent', () => {
  let component: GenerateUserCircularizationComponent;
  let fixture: ComponentFixture<GenerateUserCircularizationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenerateUserCircularizationComponent]
    });
    fixture = TestBed.createComponent(GenerateUserCircularizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
