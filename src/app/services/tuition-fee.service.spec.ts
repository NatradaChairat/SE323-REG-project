import { TestBed, inject } from '@angular/core/testing';

import { TuitionFeeService } from './tuition-fee.service';

describe('TuitionFeeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TuitionFeeService]
    });
  });

  it('should be created', inject([TuitionFeeService], (service: TuitionFeeService) => {
    expect(service).toBeTruthy();
  }));
});
