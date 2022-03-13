import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdergameComponent } from './ordergame.component';

describe('OrdergameComponent', () => {
  let component: OrdergameComponent;
  let fixture: ComponentFixture<OrdergameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdergameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdergameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
