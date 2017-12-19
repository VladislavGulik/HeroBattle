import { TestBed, inject } from '@angular/core/testing';

import { Heroes.ServiceService } from './heroes.service.service';

describe('Heroes.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Heroes.ServiceService]
    });
  });

  it('should be created', inject([Heroes.ServiceService], (service: Heroes.ServiceService) => {
    expect(service).toBeTruthy();
  }));
});
