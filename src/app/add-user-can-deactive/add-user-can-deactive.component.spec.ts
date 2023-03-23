import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserCanDeactiveComponent } from './add-user-can-deactive.component';

describe('AddUserCanDeactiveComponent', () => {
  let component: AddUserCanDeactiveComponent;
  let fixture: ComponentFixture<AddUserCanDeactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUserCanDeactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUserCanDeactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
