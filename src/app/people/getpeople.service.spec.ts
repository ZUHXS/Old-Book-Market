import { TestBed } from '@angular/core/testing';

import { GetpeopleService } from './getpeople.service';

describe('GetpeopleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetpeopleService = TestBed.get(GetpeopleService);
    expect(service).toBeTruthy();
  });
});
