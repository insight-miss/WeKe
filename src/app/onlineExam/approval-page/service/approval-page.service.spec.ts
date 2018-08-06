import { TestBed, inject } from '@angular/core/testing';

import { ApprovalPageService } from './approval-page.service';

describe('ApprovalPageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApprovalPageService]
    });
  });

  it('should be created', inject([ApprovalPageService], (service: ApprovalPageService) => {
    expect(service).toBeTruthy();
  }));
});
