import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsAccordionComponent } from './results-accordion.component';

describe('ResultsAccordionComponent', () => {
  let component: ResultsAccordionComponent;
  let fixture: ComponentFixture<ResultsAccordionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResultsAccordionComponent]
    });
    fixture = TestBed.createComponent(ResultsAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
