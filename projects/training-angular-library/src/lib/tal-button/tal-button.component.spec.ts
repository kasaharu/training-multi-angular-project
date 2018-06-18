import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalButtonComponent } from './tal-button.component';

describe('TalButtonComponent', () => {
  let component: TalButtonComponent;
  let fixture: ComponentFixture<TalButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
