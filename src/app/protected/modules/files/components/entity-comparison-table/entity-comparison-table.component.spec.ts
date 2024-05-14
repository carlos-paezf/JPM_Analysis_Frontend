import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityComparisonTableComponent } from './entity-comparison-table.component';

describe('EntityComparisonTableComponent', () => {
  let component: EntityComparisonTableComponent;
  let fixture: ComponentFixture<EntityComparisonTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntityComparisonTableComponent]
    });
    fixture = TestBed.createComponent(EntityComparisonTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
