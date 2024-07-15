import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCompanyUsersDepartmentsComponent } from './list-company-users-departments.component';

describe('ListCompanyUsersDepartmentsComponent', () => {
  let component: ListCompanyUsersDepartmentsComponent;
  let fixture: ComponentFixture<ListCompanyUsersDepartmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListCompanyUsersDepartmentsComponent]
    });
    fixture = TestBed.createComponent(ListCompanyUsersDepartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
