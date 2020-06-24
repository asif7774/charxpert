import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackQueryClientComponent } from './track-query-client.component';

describe('TrackQueryClientComponent', () => {
  let component: TrackQueryClientComponent;
  let fixture: ComponentFixture<TrackQueryClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackQueryClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackQueryClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
