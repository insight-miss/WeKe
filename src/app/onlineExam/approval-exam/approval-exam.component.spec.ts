import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalExamComponent } from './approval-exam.component';

describe('ApprovalExamComponent', () => {
  let component: ApprovalExamComponent;
  let fixture: ComponentFixture<ApprovalExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovalExamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
