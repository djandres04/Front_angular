import { TestBed } from '@angular/core/testing';

import { LightserviceService } from './lightservice.service';

describe('LightserviceService', () => {
  let service: LightserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LightserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
