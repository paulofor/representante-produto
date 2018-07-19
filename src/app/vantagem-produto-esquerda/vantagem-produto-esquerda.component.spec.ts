import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VantagemProdutoEsquerdaComponent } from './vantagem-produto-esquerda.component';

describe('VantagemProdutoEsquerdaComponent', () => {
  let component: VantagemProdutoEsquerdaComponent;
  let fixture: ComponentFixture<VantagemProdutoEsquerdaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VantagemProdutoEsquerdaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VantagemProdutoEsquerdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
