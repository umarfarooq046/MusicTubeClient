import { TestBed } from '@angular/core/testing';

import { SongsdataService } from './songsdata.service';

describe('SongsdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SongsdataService = TestBed.get(SongsdataService);
    expect(service).toBeTruthy();
  });
});
