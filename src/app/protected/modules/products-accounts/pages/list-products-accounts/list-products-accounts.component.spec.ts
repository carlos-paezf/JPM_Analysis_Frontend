import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductsAccountsComponent } from './list-products-accounts.component';

describe( 'ListClientsComponent', () => {
  let component: ListProductsAccountsComponent;
  let fixture: ComponentFixture<ListProductsAccountsComponent>;

  beforeEach( () => {
    TestBed.configureTestingModule( {
      declarations: [ ListProductsAccountsComponent ]
    } );
    fixture = TestBed.createComponent( ListProductsAccountsComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () => {
    expect( component ).toBeTruthy();
  } );
} );
