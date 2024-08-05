import { TestBed } from '@angular/core/testing';

import { UserCircularizationService } from './user-circularization.service';

describe('UserCircularizationService', () => {
  let service: UserCircularizationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserCircularizationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
