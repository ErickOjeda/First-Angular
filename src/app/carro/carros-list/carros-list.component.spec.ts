import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrosListComponent } from './carros-list.component';

describe('CarrosListComponent', () => {
  let component: CarrosListComponent;
  let fixture: ComponentFixture<CarrosListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarrosListComponent]
    });
    fixture = TestBed.createComponent(CarrosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
