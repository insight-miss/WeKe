import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackstageComponent } from './backstage.component';

describe('BackstageComponent', () => {
  let component: BackstageComponent;
  let fixture: ComponentFixture<BackstageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackstageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackstageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
