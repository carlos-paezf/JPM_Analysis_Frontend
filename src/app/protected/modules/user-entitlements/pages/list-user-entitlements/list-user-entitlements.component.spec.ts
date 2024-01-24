import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUserEntitlementsComponent } from './list-user-entitlements.component';

describe('ListUserEntitlementsComponent', () => {
  let component: ListUserEntitlementsComponent;
  let fixture: ComponentFixture<ListUserEntitlementsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListUserEntitlementsComponent]
    });
    fixture = TestBed.createComponent(ListUserEntitlementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
