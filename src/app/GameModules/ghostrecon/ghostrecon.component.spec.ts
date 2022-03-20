import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhostreconComponent } from './ghostrecon.component';

describe('GhostreconComponent', () => {
  let component: GhostreconComponent;
  let fixture: ComponentFixture<GhostreconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GhostreconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GhostreconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
