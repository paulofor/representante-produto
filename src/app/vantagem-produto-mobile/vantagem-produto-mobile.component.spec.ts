import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VantagemProdutoMobileComponent } from './vantagem-produto-mobile.component';

describe('VantagemProdutoMobileComponent', () => {
  let component: VantagemProdutoMobileComponent;
  let fixture: ComponentFixture<VantagemProdutoMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VantagemProdutoMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VantagemProdutoMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
