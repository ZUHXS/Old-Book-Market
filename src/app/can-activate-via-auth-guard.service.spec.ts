import { TestBed } from '@angular/core/testing';

import { CanActivateViaAuthGuardService } from './can-activate-via-auth-guard.service';

describe('CanActivateViaAuthGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CanActivateViaAuthGuardService = TestBed.get(CanActivateViaAuthGuardService);
    expect(service).toBeTruthy();
  });
});
