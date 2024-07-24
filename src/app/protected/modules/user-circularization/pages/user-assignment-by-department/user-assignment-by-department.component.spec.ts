import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAssignmentByDepartmentComponent } from './user-assignment-by-department.component';

describe( 'DepartmentAssignmentComponent', () => {
  let component: UserAssignmentByDepartmentComponent;
  let fixture: ComponentFixture<UserAssignmentByDepartmentComponent>;

  beforeEach( () => {
    TestBed.configureTestingModule( {
      declarations: [ UserAssignmentByDepartmentComponent ]
    } );
    fixture = TestBed.createComponent( UserAssignmentByDepartmentComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
