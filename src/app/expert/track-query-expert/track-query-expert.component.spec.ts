import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackQueryExpertComponent } from './track-query-expert.component';

describe('TrackQueryExpertComponent', () => {
  let component: TrackQueryExpertComponent;
  let fixture: ComponentFixture<TrackQueryExpertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackQueryExpertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackQueryExpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
