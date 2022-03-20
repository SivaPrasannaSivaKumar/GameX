import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rdr2Component } from './rdr2.component';

describe('Rdr2Component', () => {
  let component: Rdr2Component;
  let fixture: ComponentFixture<Rdr2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Rdr2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Rdr2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
