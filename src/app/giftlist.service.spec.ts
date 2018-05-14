import { TestBed, inject } from '@angular/core/testing';

import { GiftlistService } from './giftlist.service';

describe('GiftlistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GiftlistService]
    });
  });

  it('should be created', inject([GiftlistService], (service: GiftlistService) => {
    expect(service).toBeTruthy();
  }));
});
