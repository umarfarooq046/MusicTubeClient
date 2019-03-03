import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Songplayercomp2Component } from './songplayercomp2.component';

describe('Songplayercomp2Component', () => {
  let component: Songplayercomp2Component;
  let fixture: ComponentFixture<Songplayercomp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Songplayercomp2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Songplayercomp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
