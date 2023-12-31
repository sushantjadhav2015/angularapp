import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SushantComponent } from './sushant.component';

describe('SushantComponent', () => {
  let component: SushantComponent;
  let fixture: ComponentFixture<SushantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SushantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SushantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
