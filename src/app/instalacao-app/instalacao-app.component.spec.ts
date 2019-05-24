import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstalacaoAppComponent } from './instalacao-app.component';

describe('InstalacaoAppComponent', () => {
  let component: InstalacaoAppComponent;
  let fixture: ComponentFixture<InstalacaoAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstalacaoAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstalacaoAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
