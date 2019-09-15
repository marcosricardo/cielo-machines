import { TestBed } from '@angular/core/testing';

import { HttprequestsService } from './httprequests.service';

describe('HttprequestsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttprequestsService = TestBed.get(HttprequestsService);
    expect(service).toBeTruthy();
  });
});
