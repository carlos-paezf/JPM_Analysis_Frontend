import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserEntitlementsComponent } from './admin-user-entitlements.component';

describe('AdminUserEntitlementsComponent', () => {
  let component: AdminUserEntitlementsComponent;
  let fixture: ComponentFixture<AdminUserEntitlementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminUserEntitlementsComponent]
    });
    fixture = TestBed.createComponent(AdminUserEntitlementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
