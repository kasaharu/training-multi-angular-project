import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingAngularLibraryComponent } from './training-angular-library.component';

describe('TrainingAngularLibraryComponent', () => {
  let component: TrainingAngularLibraryComponent;
  let fixture: ComponentFixture<TrainingAngularLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingAngularLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingAngularLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
