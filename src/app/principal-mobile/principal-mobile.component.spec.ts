import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalMobileComponent } from './principal-mobile.component';

describe('PrincipalMobileComponent', () => {
  let component: PrincipalMobileComponent;
  let fixture: ComponentFixture<PrincipalMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipalMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
