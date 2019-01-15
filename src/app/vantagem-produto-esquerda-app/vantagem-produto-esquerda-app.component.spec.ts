import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VantagemProdutoEsquerdaAppComponent } from './vantagem-produto-esquerda-app.component';

describe('VantagemProdutoEsquerdaAppComponent', () => {
  let component: VantagemProdutoEsquerdaAppComponent;
  let fixture: ComponentFixture<VantagemProdutoEsquerdaAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VantagemProdutoEsquerdaAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VantagemProdutoEsquerdaAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
