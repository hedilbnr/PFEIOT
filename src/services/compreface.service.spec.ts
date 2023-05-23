import { TestBed } from '@angular/core/testing';

import { ComprefaceService } from './compreface.service';

describe('ComprefaceService', () => {
  let service: ComprefaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComprefaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
