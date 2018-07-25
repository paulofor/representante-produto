import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDummyComponent } from './item-dummy.component';

describe('ItemDummyComponent', () => {
  let component: ItemDummyComponent;
  let fixture: ComponentFixture<ItemDummyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemDummyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDummyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
