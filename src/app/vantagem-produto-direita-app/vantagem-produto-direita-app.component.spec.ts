import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VantagemProdutoDireitaAppComponent } from './vantagem-produto-direita-app.component';

describe('VantagemProdutoDireitaAppComponent', () => {
  let component: VantagemProdutoDireitaAppComponent;
  let fixture: ComponentFixture<VantagemProdutoDireitaAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VantagemProdutoDireitaAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VantagemProdutoDireitaAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
