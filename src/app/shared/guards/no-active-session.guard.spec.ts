import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { noActiveSessionGuard } from './no-active-session.guard';

describe('noActiveSessionGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => noActiveSessionGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
