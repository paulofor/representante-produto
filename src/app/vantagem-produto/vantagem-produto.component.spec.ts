import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VantagemProdutoComponent } from './vantagem-produto.component';

describe('VantagemProdutoComponent', () => {
  let component: VantagemProdutoComponent;
  let fixture: ComponentFixture<VantagemProdutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VantagemProdutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VantagemProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
