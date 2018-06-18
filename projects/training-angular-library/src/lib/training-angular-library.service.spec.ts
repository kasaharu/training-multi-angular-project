import { TestBed, inject } from '@angular/core/testing';

import { TrainingAngularLibraryService } from './training-angular-library.service';

describe('TrainingAngularLibraryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TrainingAngularLibraryService]
    });
  });

  it('should be created', inject([TrainingAngularLibraryService], (service: TrainingAngularLibraryService) => {
    expect(service).toBeTruthy();
  }));
});
