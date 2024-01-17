import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersByProfileTableComponent } from './users-by-profile-table.component';

describe('UsersByProfileTableComponent', () => {
  let component: UsersByProfileTableComponent;
  let fixture: ComponentFixture<UsersByProfileTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersByProfileTableComponent]
    });
    fixture = TestBed.createComponent(UsersByProfileTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
