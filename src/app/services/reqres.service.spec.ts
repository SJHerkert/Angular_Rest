import { TestBed } from '@angular/core/testing';

import { ReqresService } from './reqres.service';

describe('RegresService', () => {
  let service: ReqresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReqresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
