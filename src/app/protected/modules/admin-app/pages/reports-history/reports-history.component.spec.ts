import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsHistoryComponent } from './reports-history.component';

describe('ReportsHistoryComponent', () => {
  let component: ReportsHistoryComponent;
  let fixture: ComponentFixture<ReportsHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReportsHistoryComponent]
    });
    fixture = TestBed.createComponent(ReportsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
