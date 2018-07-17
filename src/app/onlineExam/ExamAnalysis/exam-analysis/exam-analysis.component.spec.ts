import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamAnalysisComponent } from './exam-analysis.component';

describe('ExamAnalysisComponent', () => {
  let component: ExamAnalysisComponent;
  let fixture: ComponentFixture<ExamAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
