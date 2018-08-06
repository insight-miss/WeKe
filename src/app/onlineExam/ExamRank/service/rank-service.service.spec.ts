import { TestBed, inject } from '@angular/core/testing';

import { RankServiceService } from './rank-service.service';

describe('RankServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RankServiceService]
    });
  });

  it('should be created', inject([RankServiceService], (service: RankServiceService) => {
    expect(service).toBeTruthy();
  }));
});
