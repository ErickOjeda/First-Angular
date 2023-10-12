import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarroslistComponent } from './carroslist.component';

describe('CarroslistComponent', () => {
  let component: CarroslistComponent;
  let fixture: ComponentFixture<CarroslistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarroslistComponent]
    });
    fixture = TestBed.createComponent(CarroslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
