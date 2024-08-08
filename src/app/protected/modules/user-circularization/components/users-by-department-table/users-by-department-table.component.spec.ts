import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersByDepartmentTableComponent } from './users-by-department-table.component';

describe('UsersByDepartmentTableComponent', () => {
  let component: UsersByDepartmentTableComponent;
  let fixture: ComponentFixture<UsersByDepartmentTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersByDepartmentTableComponent]
    });
    fixture = TestBed.createComponent(UsersByDepartmentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
