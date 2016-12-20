/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CentresService } from './centres.service';

describe('CentresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CentresService]
    });
  });

  it('should ...', inject([CentresService], (service: CentresService) => {
    expect(service).toBeTruthy();
  }));
});
