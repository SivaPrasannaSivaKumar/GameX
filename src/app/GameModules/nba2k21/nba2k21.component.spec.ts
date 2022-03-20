import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nba2k21Component } from './nba2k21.component';

describe('Nba2k21Component', () => {
  let component: Nba2k21Component;
  let fixture: ComponentFixture<Nba2k21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nba2k21Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Nba2k21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
