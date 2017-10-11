import { TestBed, inject } from '@angular/core/testing';

import { FunFastUserService } from './fun-fast-user.service';

describe('FunFastUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FunFastUserService]
    });
  });

  it('should be created', inject([FunFastUserService], (service: FunFastUserService) => {
    expect(service).toBeTruthy();
  }));
});
