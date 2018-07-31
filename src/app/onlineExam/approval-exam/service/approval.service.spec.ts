import { TestBed, inject } from '@angular/core/testing';

import { ApprovalService } from './approval.service';

describe('ApprovalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApprovalService]
    });
  });

  it('should be created', inject([ApprovalService], (service: ApprovalService) => {
    expect(service).toBeTruthy();
  }));
});
