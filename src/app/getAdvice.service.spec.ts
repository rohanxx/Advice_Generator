/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetAdviceService } from './getAdvice.service';

describe('Service: GetAdvice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetAdviceService]
    });
  });

  it('should ...', inject([GetAdviceService], (service: GetAdviceService) => {
    expect(service).toBeTruthy();
  }));
});
