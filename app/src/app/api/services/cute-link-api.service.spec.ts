import { TestBed } from '@angular/core/testing';

import { CuteLinkAPIService } from './cute-link-api.service';

describe('CuteLinkService', () => {
  let service: CuteLinkAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuteLinkAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
