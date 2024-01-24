import { TestBed } from '@angular/core/testing';

import { UserEntitlementsService } from './user-entitlements.service';

describe('UserEntitlementsService', () => {
  let service: UserEntitlementsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserEntitlementsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
