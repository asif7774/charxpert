import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyExpertsComponent } from './my-experts.component';

describe('UserExpertsComponent', () => {
  let component: MyExpertsComponent;
  let fixture: ComponentFixture<MyExpertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyExpertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyExpertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
