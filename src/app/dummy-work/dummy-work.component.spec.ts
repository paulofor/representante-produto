import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyWorkComponent } from './dummy-work.component';

describe('DummyWorkComponent', () => {
  let component: DummyWorkComponent;
  let fixture: ComponentFixture<DummyWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DummyWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
