import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassicProblemComponent } from './classic-problem.component';

describe('ClassicProblemComponent', () => {
  let component: ClassicProblemComponent;
  let fixture: ComponentFixture<ClassicProblemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassicProblemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassicProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
