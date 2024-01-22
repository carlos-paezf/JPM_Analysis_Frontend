import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlDatesFormComponent } from './control-dates-form.component';

describe('ControlDatesFormComponent', () => {
  let component: ControlDatesFormComponent;
  let fixture: ComponentFixture<ControlDatesFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ControlDatesFormComponent]
    });
    fixture = TestBed.createComponent(ControlDatesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
