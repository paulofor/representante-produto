import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VantagemProdutoDireitaComponent } from './vantagem-produto-direita.component';

describe('VantagemProdutoDireitaComponent', () => {
  let component: VantagemProdutoDireitaComponent;
  let fixture: ComponentFixture<VantagemProdutoDireitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VantagemProdutoDireitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VantagemProdutoDireitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
