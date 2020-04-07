import { TestBed } from '@angular/core/testing';

import { SupplerorderService } from './supplerorder.service';

describe('SupplerorderService', () => {
  let service: SupplerorderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupplerorderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
