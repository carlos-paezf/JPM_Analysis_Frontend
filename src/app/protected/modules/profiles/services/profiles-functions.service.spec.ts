import { TestBed } from '@angular/core/testing';

import { ProfilesFunctionsService } from './profiles-functions.service';

describe('ProfilesFunctionsService', () => {
  let service: ProfilesFunctionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfilesFunctionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
