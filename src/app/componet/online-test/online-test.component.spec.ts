import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineTestComponent } from './online-test.component';

describe('OnlineTestComponent', () => {
  let component: OnlineTestComponent;
  let fixture: ComponentFixture<OnlineTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
