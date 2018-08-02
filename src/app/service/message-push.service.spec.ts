import { TestBed, inject } from '@angular/core/testing';

import { MessagePushService } from './message-push.service';

describe('MessagePushService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessagePushService]
    });
  });

  it('should be created', inject([MessagePushService], (service: MessagePushService) => {
    expect(service).toBeTruthy();
  }));
});
