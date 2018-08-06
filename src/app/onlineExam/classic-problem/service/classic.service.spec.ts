import { TestBed, inject } from '@angular/core/testing';

import { ClassicService } from './classic.service';

describe('ClassicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClassicService]
    });
  });

  it('should be created', inject([ClassicService], (service: ClassicService) => {
    expect(service).toBeTruthy();
  }));
});
