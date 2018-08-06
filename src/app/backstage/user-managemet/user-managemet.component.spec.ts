import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManagemetComponent } from './user-managemet.component';

describe('UserManagemetComponent', () => {
  let component: UserManagemetComponent;
  let fixture: ComponentFixture<UserManagemetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserManagemetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserManagemetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
