import { TestBed } from '@angular/core/testing';

import { GamedetailService } from './gamedetail.service';

describe('GamedetailService', () => {
  let service: GamedetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GamedetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
