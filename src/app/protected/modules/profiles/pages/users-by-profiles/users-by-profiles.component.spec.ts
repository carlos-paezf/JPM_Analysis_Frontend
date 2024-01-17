import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersByProfilesComponent } from './users-by-profiles.component';

describe('UsersByProfilesComponent', () => {
  let component: UsersByProfilesComponent;
  let fixture: ComponentFixture<UsersByProfilesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsersByProfilesComponent]
    });
    fixture = TestBed.createComponent(UsersByProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
