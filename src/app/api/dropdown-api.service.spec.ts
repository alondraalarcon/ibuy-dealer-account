import { TestBed } from '@angular/core/testing';

import { DropdownApiService } from './dropdown-api.service';

describe('RegionService', () => {
  let service: DropdownApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DropdownApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
