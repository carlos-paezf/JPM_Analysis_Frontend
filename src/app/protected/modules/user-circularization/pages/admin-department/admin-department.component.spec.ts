import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDepartmentComponent } from './admin-department.component';

describe('AdminDepartmentComponent', () => {
  let component: AdminDepartmentComponent;
  let fixture: ComponentFixture<AdminDepartmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminDepartmentComponent]
    });
    fixture = TestBed.createComponent(AdminDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
