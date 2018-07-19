import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalLojamodaComponent } from './principal-lojamoda.component';

describe('PrincipalLojamodaComponent', () => {
  let component: PrincipalLojamodaComponent;
  let fixture: ComponentFixture<PrincipalLojamodaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipalLojamodaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalLojamodaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
