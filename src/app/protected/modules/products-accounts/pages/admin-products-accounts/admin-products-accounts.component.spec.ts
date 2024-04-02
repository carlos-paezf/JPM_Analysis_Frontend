import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductsAccountsComponent } from './admin-products-accounts.component';

describe( 'AdminClientsComponent', () => {
  let component: AdminProductsAccountsComponent;
  let fixture: ComponentFixture<AdminProductsAccountsComponent>;

  beforeEach( () => {
    TestBed.configureTestingModule( {
      declarations: [ AdminProductsAccountsComponent ]
    } );
    fixture = TestBed.createComponent( AdminProductsAccountsComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
