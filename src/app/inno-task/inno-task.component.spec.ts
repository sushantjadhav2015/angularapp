import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnoTaskComponent } from './inno-task.component';

describe('InnoTaskComponent', () => {
  let component: InnoTaskComponent;
  let fixture: ComponentFixture<InnoTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnoTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnoTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
