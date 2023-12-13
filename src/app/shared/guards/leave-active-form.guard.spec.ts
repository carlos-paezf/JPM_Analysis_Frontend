import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { leaveActiveFormGuard } from './leave-active-form.guard';

describe('leaveActiveFormGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => leaveActiveFormGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
