import { TestBed } from '@angular/core/testing';

import { ProductsAccountsService } from './products-accounts.service';

describe( 'ClientsService', () => {
  let service: ProductsAccountsService;

  beforeEach( () => {
    TestBed.configureTestingModule( {} );
    service = TestBed.inject( ProductsAccountsService );
  } );

  it( 'should be created', () => {
    expect( service ).toBeTruthy();
  } );
} );
