import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackQueryComponent } from './track-query.component';

describe('TrackQueryComponent', () => {
  let component: TrackQueryComponent;
  let fixture: ComponentFixture<TrackQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
