import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareResultsComponent } from './compare-results.component';

describe('CompareResultsComponent', () => {
  let component: CompareResultsComponent;
  let fixture: ComponentFixture<CompareResultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompareResultsComponent]
    });
    fixture = TestBed.createComponent(CompareResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
