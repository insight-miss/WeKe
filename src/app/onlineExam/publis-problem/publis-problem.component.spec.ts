import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublisProblemComponent } from './publis-problem.component';

describe('PublisProblemComponent', () => {
  let component: PublisProblemComponent;
  let fixture: ComponentFixture<PublisProblemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublisProblemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublisProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
