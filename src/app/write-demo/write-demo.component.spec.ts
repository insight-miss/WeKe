import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteDemoComponent } from './write-demo.component';

describe('WriteDemoComponent', () => {
  let component: WriteDemoComponent;
  let fixture: ComponentFixture<WriteDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WriteDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
