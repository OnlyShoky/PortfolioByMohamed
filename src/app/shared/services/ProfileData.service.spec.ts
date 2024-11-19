import { TestBed } from '@angular/core/testing';

import { ProfileDataService } from './ProfileData.service';

describe('ProjectsService', () => {
  let service: ProfileDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
