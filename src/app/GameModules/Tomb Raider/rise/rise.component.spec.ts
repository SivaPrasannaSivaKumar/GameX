import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiseComponent } from './rise.component';

describe('RiseComponent', () => {
  let component: RiseComponent;
  let fixture: ComponentFixture<RiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
