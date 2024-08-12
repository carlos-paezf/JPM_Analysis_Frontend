import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircularizationEmailComponent } from './circularization-email.component';

describe( 'EmailCircularizationComponent', () => {
  let component: CircularizationEmailComponent;
  let fixture: ComponentFixture<CircularizationEmailComponent>;

  beforeEach( () => {
    TestBed.configureTestingModule( {
      declarations: [ CircularizationEmailComponent ]
    } );
    fixture = TestBed.createComponent( CircularizationEmailComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
