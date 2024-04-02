import { TestBed } from '@angular/core/testing';

import { AppUtilsMessagesService } from './app-utils-messages.service';

describe( 'AppUtilsMessagesService', () => {
  let service: AppUtilsMessagesService;

  beforeEach( () => {
    TestBed.configureTestingModule( {} );
    service = TestBed.inject( AppUtilsMessagesService );
  } );

  it( 'should be created', () => {
    expect( service ).toBeTruthy();
  } );
} );
