import { TestBed, inject } from '@angular/core/testing';

import { TranscriptService } from './transcript.service';

describe('TranscriptService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TranscriptService]
    });
  });

  it('should be created', inject([TranscriptService], (service: TranscriptService) => {
    expect(service).toBeTruthy();
  }));
});
