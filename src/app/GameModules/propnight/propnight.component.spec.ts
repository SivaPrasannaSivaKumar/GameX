import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropnightComponent } from './propnight.component';

describe('PropnightComponent', () => {
  let component: PropnightComponent;
  let fixture: ComponentFixture<PropnightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropnightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropnightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
