import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryAcknowledgeComponent } from './query-acknowledge.component';

describe('QueryAcknowledgeComponent', () => {
  let component: QueryAcknowledgeComponent;
  let fixture: ComponentFixture<QueryAcknowledgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryAcknowledgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryAcknowledgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
