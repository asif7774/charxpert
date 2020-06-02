import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserExpertsComponent } from './user-experts.component';

describe('UserExpertsComponent', () => {
  let component: UserExpertsComponent;
  let fixture: ComponentFixture<UserExpertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserExpertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserExpertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
