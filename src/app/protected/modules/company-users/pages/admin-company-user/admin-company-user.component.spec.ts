import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCompanyUserComponent } from './admin-company-user.component';

describe('AdminCompanyUserComponent', () => {
  let component: AdminCompanyUserComponent;
  let fixture: ComponentFixture<AdminCompanyUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminCompanyUserComponent]
    });
    fixture = TestBed.createComponent(AdminCompanyUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
