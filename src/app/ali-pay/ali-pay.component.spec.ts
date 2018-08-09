import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AliPayComponent } from './ali-pay.component';

describe('AliPayComponent', () => {
  let component: AliPayComponent;
  let fixture: ComponentFixture<AliPayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AliPayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AliPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
