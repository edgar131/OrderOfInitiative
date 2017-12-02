import { TestBed, inject } from '@angular/core/testing';

import { GtagService } from './gtag.service';

describe('GtagService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GtagService]
    });
  });

  it('should be created', inject([GtagService], (service: GtagService) => {
    expect(service).toBeTruthy();
  }));
});
